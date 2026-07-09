import { NextRequest, NextResponse } from "next/server";
import { answerQuestion, streamAnswer, type ChatTurn } from "@/lib/qa";

export const maxDuration = 60;

function validTurns(v: unknown): ChatTurn[] | null {
  if (!Array.isArray(v) || v.length === 0 || v.length > 40) return null;
  const turns: ChatTurn[] = [];
  for (const t of v) {
    if (!t || (t.role !== "user" && t.role !== "assistant") || typeof t.content !== "string") return null;
    if (t.content.length > 4000) return null;
    turns.push({ role: t.role, content: t.content });
  }
  const last = turns[turns.length - 1];
  if (last.role !== "user" || last.content.trim().length < 2) return null;
  return turns;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  // 레거시 경로: { question } → 단건 JSON (Agent 등 기존 호출 호환)
  if (typeof body.question === "string" && !body.stream) {
    const q = body.question.trim();
    if (q.length < 2) return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });
    if (q.length > 1000) return NextResponse.json({ error: "질문이 너무 깁니다 (1000자 이내)." }, { status: 400 });
    try {
      return NextResponse.json(await answerQuestion(q));
    } catch (e) {
      console.error("qa error", e);
      return NextResponse.json(
        { error: "답변 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
        { status: 500 }
      );
    }
  }

  const turns = validTurns(body.messages);
  if (!turns) return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      try {
        for await (const evt of streamAnswer(turns)) send(evt);
      } catch (e) {
        console.error("qa stream error", e);
        const msg = e instanceof Error && e.message.includes("credit balance")
          ? "Anthropic API 크레딧이 소진되어 Q&A가 일시 중지됐습니다. 관리자에게 알려주세요."
          : "답변 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
        send({ type: "error", message: msg });
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
  });
}

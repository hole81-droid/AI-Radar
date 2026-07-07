import { NextRequest, NextResponse } from "next/server";
import { answerQuestion } from "@/lib/qa";

export const maxDuration = 60; // Vercel 함수 타임아웃 (LLM 호출 여유)

// 웹 UI 전용 — 세션 쿠키는 middleware가 검사한다.
export async function POST(req: NextRequest) {
  const { question } = await req.json().catch(() => ({}));
  if (typeof question !== "string" || question.trim().length < 2) {
    return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });
  }
  if (question.length > 1000) {
    return NextResponse.json({ error: "질문이 너무 깁니다 (1000자 이내)." }, { status: 400 });
  }
  try {
    const result = await answerQuestion(question.trim());
    return NextResponse.json(result);
  } catch (e) {
    console.error("qa error", e);
    return NextResponse.json(
      { error: "답변 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}

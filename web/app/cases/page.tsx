import Link from "next/link";
import { pages } from "@/lib/content";
import CaseExplorer, { type CaseItem } from "./CaseExplorer";

function asArray(v: string | string[] | undefined): string[] {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

function asString(v: string | string[] | undefined): string {
  if (!v) return "";
  return Array.isArray(v) ? v.join(", ") : v;
}

export default function CasesPage() {
  const cases: CaseItem[] = pages
    .filter((p) => p.meta.type === "use-case")
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: asString(p.meta.date),
      tools: asArray(p.meta.tools),
      mechanism: asArray(p.meta.mechanism),
      domain: asString(p.meta.domain),
      task: asString(p.meta.task),
      outcome: asString(p.meta.outcome),
      model: asString(p.meta.model),
      cost: asString(p.meta.cost),
      permissions: asString(p.meta.permissions),
      maturity: asString(p.meta.maturity),
      evidence: asString(p.meta.evidence),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        <h1 className="page-title">에이전트·자동화 Use Case</h1>
        <Link href="/wiki" className="ln" style={{ fontSize: 12.5 }}>위키 카탈로그 →</Link>
      </div>
      <p className="page-meta">
        도구 × 방식 × 업무 × 성과로 구조화된 실전 사례. 카드를 누르면 아키텍처·벤치마크·재현
        가이드가 담긴 상세 페이지로 이동합니다.
      </p>
      <CaseExplorer cases={cases} />
    </div>
  );
}

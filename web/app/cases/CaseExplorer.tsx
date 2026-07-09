"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type CaseItem = {
  slug: string;
  title: string;
  date: string;
  tools: string[];
  mechanism: string[];
  domain: string;
  task: string;
  outcome: string;
  model: string;
  cost: string;
  permissions: string;
  maturity: string;
  evidence: string;
};

const DOMAIN_LABELS: Record<string, string> = {
  "content-creation": "콘텐츠 제작",
  "customer-support": "고객 응대",
  research: "리서치",
  reporting: "보고·문서",
  "dev-automation": "개발 자동화",
  ops: "운영",
  marketing: "마케팅",
  sales: "영업",
  hr: "HR",
  finance: "재무",
  "personal-productivity": "개인 생산성",
  education: "교육",
};

const MATURITY_LABELS: Record<string, string> = {
  production: "실운영",
  pilot: "파일럿",
  prototype: "프로토타입",
  demo: "데모",
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} className={`chip${active ? " active" : ""}`}>
      {children}
    </button>
  );
}

export default function CaseExplorer({ cases }: { cases: CaseItem[] }) {
  const [domain, setDomain] = useState<string | null>(null);
  const [tool, setTool] = useState<string | null>(null);
  const [mech, setMech] = useState<string | null>(null);

  const domains = useMemo(
    () => [...new Set(cases.map((c) => c.domain).filter(Boolean))].sort(),
    [cases]
  );
  const tools = useMemo(
    () => [...new Set(cases.flatMap((c) => c.tools))].sort(),
    [cases]
  );
  const mechs = useMemo(
    () => [...new Set(cases.flatMap((c) => c.mechanism))].sort(),
    [cases]
  );

  const filtered = cases.filter(
    (c) =>
      (!domain || c.domain === domain) &&
      (!tool || c.tools.includes(tool)) &&
      (!mech || c.mechanism.includes(mech))
  );

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span className="hint" style={{ width: 70 }}>업무 영역</span>
          <Chip active={!domain} onClick={() => setDomain(null)}>전체</Chip>
          {domains.map((d) => (
            <Chip key={d} active={domain === d} onClick={() => setDomain(domain === d ? null : d)}>
              {DOMAIN_LABELS[d] ?? d}
            </Chip>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span className="hint" style={{ width: 70 }}>도구</span>
          <Chip active={!tool} onClick={() => setTool(null)}>전체</Chip>
          {tools.map((t) => (
            <Chip key={t} active={tool === t} onClick={() => setTool(tool === t ? null : t)}>
              {t}
            </Chip>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span className="hint" style={{ width: 70 }}>방식</span>
          <Chip active={!mech} onClick={() => setMech(null)}>전체</Chip>
          {mechs.map((m) => (
            <Chip key={m} active={mech === m} onClick={() => setMech(mech === m ? null : m)}>
              {m}
            </Chip>
          ))}
        </div>
      </div>

      <p className="hint">{filtered.length}건 / 전체 {cases.length}건</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {filtered.map((c) => (
          <Link key={c.slug} href={`/wiki/${c.slug}`} className="newsletter-card" style={{ margin: 0 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              <span className="badge">{DOMAIN_LABELS[c.domain] ?? c.domain}</span>
              {c.tools.map((t) => (
                <span className="badge" key={t}>{t}</span>
              ))}
              {c.maturity && (
                <span className={`badge${c.maturity === "production" ? " gold" : ""}`}>
                  {MATURITY_LABELS[c.maturity] ?? c.maturity}
                </span>
              )}
            </div>
            <strong>{c.title}</strong>
            <p style={{ margin: "8px 0" }}>
              <b>{c.task || "업무 미분류"}</b>
              {c.outcome && <> → {c.outcome}</>}
            </p>
            <p className="hint" style={{ margin: 0 }}>
              방식: {c.mechanism.join(", ") || "—"} · 모델: {c.model || "미확인"} · 비용:{" "}
              {c.cost || "미확인"} · 권한: {c.permissions || "미확인"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("암호가 올바르지 않습니다.");
    }
  }

  return (
    <div className="login-wrap">
      <form className="card login-card" onSubmit={submit}>
        <h1 style={{ margin: 0 }}>📡 AI Radar</h1>
        <p className="hint">팀 공유 암호를 입력하세요</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="공유 암호"
          autoFocus
        />
        {error && <p className="error">{error}</p>}
        <button className="btn btn-red" style={{ width: "100%" }} disabled={busy}>
          입장
        </button>
      </form>
    </div>
  );
}

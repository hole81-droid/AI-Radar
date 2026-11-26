// Edge 런타임(middleware)과 Node 런타임(API route) 양쪽에서 동작해야 하므로
// node:crypto 대신 Web Crypto(crypto.subtle)만 사용한다.

export const SESSION_COOKIE = "air_session";

const enc = new TextEncoder();

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacHex(key: string, message: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(message));
  return toHex(sig);
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// 쿠키 값 = HMAC(AUTH_SECRET, SITE_PASSWORD). 암호를 바꾸면 전체 세션이 무효화된다.
export async function sessionValue(): Promise<string> {
  return hmacHex(
    process.env.AUTH_SECRET || "dev-secret-change-me",
    process.env.SITE_PASSWORD || ""
  );
}

export function checkPassword(input: string): boolean {
  const expected = process.env.SITE_PASSWORD || "";
  if (!expected) return false;
  return constantTimeEqual(input, expected);
}

export async function isValidSession(cookie: string | undefined): Promise<boolean> {
  if (!cookie) return false;
  return constantTimeEqual(cookie, await sessionValue());
}

export function isValidAgentToken(authHeader: string | null): boolean {
  const token = process.env.AGENT_API_TOKEN || "";
  if (!token || !authHeader) return false;
  return constantTimeEqual(authHeader.replace(/^Bearer\s+/i, ""), token);
}

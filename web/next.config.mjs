/** @type {import('next').NextConfig} */
const nextConfig = {
  // 위키 콘텐츠는 prebuild 단계에서 lib/content.generated.json으로 직렬화되어 번들에 포함된다.
  // 런타임 파일시스템 접근이 없으므로 Vercel 서버리스에서 추가 설정이 필요 없다.
  reactStrictMode: true,
};

export default nextConfig;

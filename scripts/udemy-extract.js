// Udemy 검색 결과에서 강의 카드를 뽑는 추출기 (2026-09-28 작성)
//
// Udemy는 curl·WebFetch가 전부 Cloudflare 403이다. **실제 브라우저에서만 열린다.**
// Claude Code의 Browser pane(mcp__Claude_Browser__*)에서 아래 순서로 쓴다.
//
//   1. navigate  https://www.udemy.com/courses/search/?q=<검색어>&sort=newest&lang=ko
//   2. javascript_tool 로 이 파일의 IIFE를 실행 (지연 로딩 때문에 앞의 await 필요)
//
// 반환: [{s: slug, t: 제목, r: 평점, n: 후기수, h: 시간, lv: 난이도, b: 배지(N=신규, BS=베스트셀러)}]
// 강의 URL은 https://www.udemy.com/course/<slug>/ 로 만든다.
//
// sort=popularity → 카테고리 상위 목록(카탈로그 갱신용)
// sort=newest     → 신규 강의(데일리 스캔용). lang=ko / lang=en 으로 언어를 가른다.

(async () => {
  await new Promise(r => setTimeout(r, 2500));   // 카드 지연 로딩 대기
  const seen = new Set(), out = [];
  document.querySelectorAll('main a[href^="/course/"]').forEach(a => {
    const href = a.getAttribute('href').split('?')[0];
    const card = a.closest('div[class*="course-card"]') || a.closest('li') || a.parentElement;
    const txt = (card?.innerText || '').replace(/\s+/g, ' ').trim();
    if (txt.length < 50 || seen.has(href)) return;
    seen.add(href);
    const g = re => { const m = txt.match(re); return m ? m[1] : null; };
    out.push({
      s: href.replace('/course/', '').replace(/\/$/, ''),
      t: (a.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 60),
      r: g(/평점: ([\d.]+)\//),
      n: g(/([\d,]+) ratings|후기 ([\d,]+)개/),
      h: g(/([\d.]+) total hours|총 ([\d.]+)시간/),
      lv: g(/(All levels|Beginner|Intermediate|Expert)/),
      b: [/신규|New/.test(txt) ? 'N' : '', /Bestseller|베스트셀러/.test(txt) ? 'BS' : ''].filter(Boolean).join('')
    });
  });
  return out.slice(0, 12);
})()

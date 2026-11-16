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

// 2026-11-16 수정: 카드 컨테이너를 `div[class*="course-card"]`로 특정하고 `txt.length < 50`으로
// 버리던 옛 방식은 Udemy가 카드 마크업을 바꾼 뒤 **24건 중 3건만** 잡았다(11-16 실측). 지금은
// 링크에서 위로 올라가며 카드 전체 텍스트가 잡히는 조상을 찾고, 길이로 버리지 않는다.
// 최신순 신규 강의는 평점·후기·분량이 아예 없는 게 정상이므로 null을 그대로 둔다 — "미확인"으로 적을 것.
(async () => {
  await new Promise(r => setTimeout(r, 2500));   // 카드 지연 로딩 대기
  const EXCL = /모의고사|모의시험|실전 시험|문제은행|\d{3,}\s*문항|practice tests?|practice exams?|mock exams?|\bdumps?\b|\d{3,}\s*MCQs?/i;
  const seen = new Set(), out = [], dropped = [];
  document.querySelectorAll('main a[href^="/course/"]').forEach(a => {
    const href = a.getAttribute('href').split('?')[0];
    if (seen.has(href)) return;
    seen.add(href);
    let el = a, txt = '';
    for (let i = 0; i < 8 && el; i++) {          // 카드 전체 텍스트가 잡힐 때까지 위로
      txt = (el.innerText || '').replace(/\s+/g, ' ').trim();
      if (txt.length > 60) break;
      el = el.parentElement;
    }
    const title = (a.innerText || '').replace(/\s+/g, ' ').trim();
    if (EXCL.test(title) || EXCL.test(txt.slice(0, 200))) { dropped.push(title.slice(0, 50)); return; }
    const g = re => { const m = txt.match(re); return m ? (m[1] || m[2]) : null; };
    out.push({
      s: href.replace('/course/', '').replace(/\/$/, ''),
      t: title.slice(0, 70),
      sub: txt.replace(title, '').replace(/강사:[\s\S]*/, '').trim().slice(0, 90),
      inst: g(/강사:\s*([^]+?)(?:\s{2,}|$)|By\s+([^]+?)(?:\s{2,}|$)/),
      r: g(/평점[: ]*([\d.]+)|([\d.]+)\s*out of 5/),
      n: g(/\(([\d,]+)\)|([\d,]+)개의 평점/),
      h: g(/총 ([\d.]+)시간|([\d.]+) total hours/),
      b: [/신규|\bNew\b/.test(txt) ? 'N' : '', /베스트셀러|Bestseller/.test(txt) ? 'BS' : ''].filter(Boolean).join('')
    });
  });
  return { kept: out.length, droppedExams: dropped.length, out };   // 자격증 덤프는 집계만 하고 버린다
})()

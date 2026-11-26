import bundle from "./content.generated.json";

export type Page = {
  slug: string;
  title: string;
  meta: Record<string, string | string[]>;
  body: string;
};

type Bundle = {
  generatedAt: string;
  index: string;
  pages: Page[];
  newsletters: Page[];
};

const content = bundle as unknown as Bundle;

export const generatedAt = content.generatedAt;
export const wikiIndex = content.index;
export const pages: Page[] = content.pages;
export const newsletters: Page[] = content.newsletters;

export function getPage(slug: string): Page | undefined {
  return pages.find((p) => p.slug === slug);
}

// [[위키링크]]는 파일명만 담고 있으므로 slug 끝부분으로 해석한다
export function resolveWikilink(name: string): Page | undefined {
  const n = name.trim();
  return (
    pages.find((p) => p.slug === n) ||
    pages.find((p) => p.slug.endsWith(`/${n}`)) ||
    pages.find((p) => p.slug.split("/").pop() === n)
  );
}

export function getNewsletter(date: string): Page | undefined {
  return newsletters.find((n) => n.slug === date);
}

export function latestNewsletter(): Page | undefined {
  return newsletters[0];
}

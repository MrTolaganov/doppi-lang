export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "O'qishni Boshlash",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Kirish", href: "/introduction" },
      {
        title: "O'rnatish",
        href: "/installation",
      },
      { title: "Extension O'rnatish", href: "/extension-install" },
    ],
  },
  {
    title: "Sintaksis",
    href: "/syntaxes",
    noLink: true,
    items: [
      { title: "variables", href: "/variables" },
      { title: "functions", href: "/functions" },
      { title: "conditionals", href: "/conditionals" },
      { title: "loops", href: "/loops" },
      { title: "increment & decrement", href: "/increment-decrement" },
      { title: "arrays", href: "/arrays" },
      { title: "objects", href: "/objects" },
      { title: "o'zgarmas funksiyalar", href: "/expect-functions" },
      { title: "Switch & Case", href: "/switch-case" },
      { title: "Turlar", href: "/types" },
      { title: "Matematik Kutubxonalar", href: "/math-libs" },
    ]
  },
  {
    title: "Standart Kutubxonalar",
    href: "/standart-libs",
    noLink: true,
    items: [
      {
        title: "K/CH (kiriti va chiqarish)",
        href: "/io",
      },
    ]
  }
];

type Page = { title: string; href: string };

function getRecursiveAllLinks(node: EachRoute, baseHref = ""): Page[] {
  const fullHref = `${baseHref}${node.href}`;
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: fullHref });
  }
  node.items?.forEach((subNode) => {
    ans.push(...getRecursiveAllLinks(subNode, fullHref));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecursiveAllLinks(it)).flat();

import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "JL Homesale",
  description: "Sell your property as-is, with no agent commissions on our purchase.",
  href: "https://jlhomesale.com",
  author: "Jon Hudak",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  posts: {
    path: "/posts",
    label: "Posts",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  documentation: {
    path: "/docs",
    label: "Documentation",
  },
};

// export const SOCIAL_LINKS: SocialLinks = {
//   email: {
//     label: "Email",
//     href: "mailto:ttl@trevortylerlee.com",
//   },
//   github: {
//     label: "GitHub",
//     href: "https://github.com/trevortylerlee",
//   },
//   twitter: {
//     label: "X (formerly Twitter)",
//     href: "https://twitter.com/boogerbuttcheek",
//   },
// };

export type NavItem = {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Explore",
    children: [
      { label: "All Packages", href: "/packages" },
      { label: "Gallery", href: "/#gallery" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    label: "Discover",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Tree Hugging", href: "/blog/tree-hugging" },
      { label: "St. Clair's Falls", href: "/blog/st-claire-waterfall" },
    ],
  },
  { label: "Contact", href: "/#contact" },
  {
    label: "Legal",
    children: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];

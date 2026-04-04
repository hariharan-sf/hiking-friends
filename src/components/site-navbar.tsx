import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type SiteNavbarProps = {
  navItems: NavItem[];
  bookHikeUrl: string;
  theme?: "dark" | "light";
  maxWidthClassName?: string;
};

export default function SiteNavbar({
  navItems,
  bookHikeUrl,
  theme = "dark",
  maxWidthClassName = "max-w-6xl",
}: SiteNavbarProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mx-auto ${maxWidthClassName} flex items-center justify-between gap-4 rounded-full px-4 py-3 lg:px-6 ${
        isDark ? "border border-white/30 bg-white/15 backdrop-blur-md" : "border border-gray-200 bg-white shadow-sm"
      }`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo-shf.png"
          alt="Hiking Friends Sri Lanka logo"
          width={34}
          height={34}
          className="h-12 w-12 rounded-full object-cover lg:h-9 lg:w-9"
        />
        <span className={`hidden font-luxury text-lg tracking-wide lg:block lg:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
          Hiking Friends
        </span>
      </Link>

      <nav className={`hidden items-center gap-7 text-sm lg:flex ${isDark ? "text-white/95" : "text-gray-700"}`}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`transition ${isDark ? "hover:text-amber-200" : "hover:text-amber-600"}`}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href={bookHikeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 lg:px-6"
      >
        Book a Hike
      </a>
    </div>
  );
}

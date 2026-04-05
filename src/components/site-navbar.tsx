"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/data/navigation";

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
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isDark = theme === "dark";
  const desktopNavTextColor = isDark ? "text-white/95" : "text-gray-700";
  const desktopHoverColor = isDark ? "hover:text-amber-200" : "hover:text-amber-600";
  const menuBg = isDark ? "border-white/20 bg-emerald-950/95 text-white" : "border-gray-200 bg-white text-gray-800";
  const menuItemHover = isDark ? "hover:bg-white/10" : "hover:bg-amber-50";
  const flatNavItems = navItems.flatMap((item) => (item.children ? item.children : item.href ? [{ label: item.label, href: item.href }] : []));

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpenDesktopDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`mx-auto ${maxWidthClassName} flex items-center justify-between gap-4 rounded-full px-4 py-3 lg:px-6 ${
        isDark ? "border border-white/30 bg-white/15 backdrop-blur-md" : "border border-gray-200 bg-white shadow-sm"
      }`}
    >
      <Link href="/" aria-label="Go to Hiking Friends home page" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
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

      <nav aria-label="Primary navigation" className={`hidden items-center gap-6 text-sm lg:flex ${desktopNavTextColor}`}>
        {navItems.map((item) => (
          item.children?.length ? (
            <div key={item.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenDesktopDropdown((prev) => (prev === item.label ? null : item.label))}
                className={`flex cursor-pointer items-center gap-1.5 transition ${desktopHoverColor}`}
                aria-expanded={openDesktopDropdown === item.label}
                aria-haspopup="menu"
                aria-controls={`${item.label.toLowerCase().replace(/\s+/g, "-")}-menu`}
              >
                {item.label}
                <span aria-hidden className={`text-xs transition ${openDesktopDropdown === item.label ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openDesktopDropdown === item.label ? (
                <div
                  id={`${item.label.toLowerCase().replace(/\s+/g, "-")}-menu`}
                  role="menu"
                  className={`absolute left-1/2 top-8 z-30 w-52 -translate-x-1/2 rounded-xl border p-2 shadow-xl ${menuBg}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpenDesktopDropdown(null)}
                      role="menuitem"
                      className={`block rounded-lg px-3 py-2 text-sm transition ${menuItemHover}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : item.href ? (
            <Link key={item.label} href={item.href} className={`transition ${desktopHoverColor}`}>
              {item.label}
            </Link>
          ) : null
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
              isDark ? "border-white/40 text-white" : "border-gray-300 text-gray-700"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            ☰
          </button>

          {mobileMenuOpen ? (
            <div id="mobile-navigation-menu" className={`absolute right-0 top-12 z-30 w-60 rounded-xl border p-2 shadow-xl ${menuBg}`}>
              {flatNavItems.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${menuItemHover}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <a
          href={bookHikeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 lg:inline-flex lg:px-6"
        >
          Book a Package
        </a>
      </div>
    </div>
  );
}

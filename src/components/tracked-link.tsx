"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/mixpanel";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventProps?: Record<string, unknown>;
  external?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventProps,
  external = false,
  target,
  rel,
}: TrackedLinkProps) {
  const onClick = () => {
    trackEvent(eventName, {
      href,
      ...eventProps,
    });
  };

  if (external) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

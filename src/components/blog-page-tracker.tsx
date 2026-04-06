"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/mixpanel";

type BlogPageTrackerProps = {
  pageType: "listing" | "article";
  slug: string;
  title: string;
};

export default function BlogPageTracker({ pageType, slug, title }: BlogPageTrackerProps) {
  useEffect(() => {
    trackEvent("Blog Page Viewed", {
      page_type: pageType,
      blog_slug: slug,
      blog_title: title,
    });
  }, [pageType, slug, title]);

  return null;
}

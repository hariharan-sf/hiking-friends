"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN =
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID ?? "4009909";

export default function MixpanelProvider() {
  const hasInitializedRef = useRef(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!MIXPANEL_TOKEN || hasInitializedRef.current) {
      return;
    }

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV !== "production",
      persistence: "localStorage",
      track_pageview: true,
      record_sessions_percent: 100,
      ignore_dnt: true,
    });

    mixpanel.start_session_recording();
    hasInitializedRef.current = true;
  }, []);

  useEffect(() => {
    if (!MIXPANEL_TOKEN || !hasInitializedRef.current) {
      return;
    }

    mixpanel.track("Page Viewed", {
      page: currentUrl,
      path: pathname,
    });
  }, [currentUrl, pathname]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN =
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID ?? "4009909";

function getClientContext(pathname: string) {
  if (typeof window === "undefined") {
    return {
      page: pathname,
      path: pathname,
    };
  }

  const locale = navigator.language || "unknown";
  const localeParts = locale.split("-");
  const countryFromLocale = localeParts.length > 1 ? localeParts[localeParts.length - 1].toUpperCase() : "unknown";
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";
  const query = window.location.search || "";

  return {
    page: `${pathname}${query}`,
    path: pathname,
    query_string: query,
    url: window.location.href,
    referrer: document.referrer || "direct",
    language: locale,
    country: countryFromLocale,
    timezone,
    user_agent: navigator.userAgent,
    platform: navigator.platform || "unknown",
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
  };
}

export default function MixpanelProvider() {
  const hasInitializedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!MIXPANEL_TOKEN || hasInitializedRef.current) {
      return;
    }

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV !== "production",
      persistence: "localStorage",
      track_pageview: true,
      record_sessions_percent: 100,
      record_mask_all_text: false,
      record_mask_all_inputs: false,
      ignore_dnt: true,
      ip: true,
    });

    mixpanel.register({
      language: navigator.language || "unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
    });

    mixpanel.start_session_recording();
    hasInitializedRef.current = true;
  }, []);

  useEffect(() => {
    if (!MIXPANEL_TOKEN || !hasInitializedRef.current) {
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 3000);

    const loadGeo = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const geoProps = {
          country_ip: data?.country_name ?? "unknown",
          country_code_ip: data?.country_code ?? "unknown",
          city_ip: data?.city ?? "unknown",
          region_ip: data?.region ?? "unknown",
          timezone_ip: data?.timezone ?? "unknown",
        };

        mixpanel.register(geoProps);
        mixpanel.track("Geo Context Loaded", geoProps);
      } catch {
        // Intentionally ignore; geo enrichment is best-effort.
      } finally {
        window.clearTimeout(timer);
      }
    };

    loadGeo();
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!MIXPANEL_TOKEN || !hasInitializedRef.current) {
      return;
    }

    mixpanel.track("Page Viewed", getClientContext(pathname));
  }, [pathname]);

  return null;
}

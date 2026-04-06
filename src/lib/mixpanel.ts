"use client";

import mixpanel from "mixpanel-browser";

function getDefaultContext() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    path: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || "direct",
  };
}

export function trackEvent(eventName: string, eventProps: Record<string, unknown> = {}) {
  try {
    mixpanel.track(eventName, {
      ...getDefaultContext(),
      ...eventProps,
      tracked_at: new Date().toISOString(),
    });
  } catch {
    // Ignore tracking failures to avoid affecting UI behavior.
  }
}

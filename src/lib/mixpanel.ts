"use client";

import mixpanel from "mixpanel-browser";

type QueuedEvent = {
  name: string;
  props: Record<string, unknown>;
};

const queuedEvents: QueuedEvent[] = [];
const MAX_QUEUED_EVENTS = 100;
let isMixpanelReady = false;

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

function trackNow(eventName: string, eventProps: Record<string, unknown>) {
  mixpanel.track(eventName, {
    ...getDefaultContext(),
    ...eventProps,
    tracked_at: new Date().toISOString(),
  });
}

export function markMixpanelReady() {
  isMixpanelReady = true;

  while (queuedEvents.length > 0) {
    const next = queuedEvents.shift();
    if (!next) {
      continue;
    }

    try {
      trackNow(next.name, next.props);
    } catch {
      // Ignore tracking failures to avoid affecting UI behavior.
    }
  }
}

export function trackEvent(eventName: string, eventProps: Record<string, unknown> = {}) {
  try {
    if (!isMixpanelReady) {
      if (queuedEvents.length >= MAX_QUEUED_EVENTS) {
        queuedEvents.shift();
      }
      queuedEvents.push({
        name: eventName,
        props: eventProps,
      });
      return;
    }

    trackNow(eventName, eventProps);
  } catch {
    // Ignore tracking failures to avoid affecting UI behavior.
  }
}

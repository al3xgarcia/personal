import mixpanel from "mixpanel-browser";
import { ANALYTICS_EVENTS } from "./events";
import type { OutboundClickProps, PageViewProps } from "./types";

let initialized = false;

export function initMixpanel(): void {
  if (initialized || typeof window === "undefined") return;

  const token = import.meta.env.VITE_MIXPANEL_TOKEN;
  if (!token) {
    if (import.meta.env.DEV) {
      console.warn("[analytics] VITE_MIXPANEL_TOKEN is not set");
    }
    return;
  }

  mixpanel.init(token, {
    autocapture: false,
    persistence: "localStorage",
    track_pageview: false,
    debug: import.meta.env.DEV,
  });

  initialized = true;
}

export function isMixpanelReady(): boolean {
  return initialized;
}

export function trackPageView(props?: PageViewProps): void {
  if (!initialized) return;
  mixpanel.track_pageview({
    page: props?.page ?? "home",
  });
}

export function trackOutboundClick({ destination }: OutboundClickProps): void {
  if (!initialized) return;
  mixpanel.track(ANALYTICS_EVENTS.outboundClick, { destination });
}

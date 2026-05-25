export const ANALYTICS_EVENTS = {
  outboundClick: "outbound_click",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const track = (event: string, params?: Record<string, unknown>) => {
  window.gtag?.("event", event, params);
};

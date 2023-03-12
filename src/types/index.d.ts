export {};

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

declare global {
  interface Window {
    gtag: any; // 👈️ turn off type checking
  }
}
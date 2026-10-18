export const writeCookie = (name: string, value: string, maxAgeSeconds: number): void => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
};

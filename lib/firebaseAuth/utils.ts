import { parseCookies } from 'nookies';

export const FI_TTL = 30 * 24 * 60 * 60;

export const FI_COOKIE_OPTIONS = {
  path: '/',
  maxAge: FI_TTL,
  sameSite: true,
  secure: true,
};

export const getCookieIdToken = () => {
  const cookies = parseCookies();
  return cookies['fi'];
};

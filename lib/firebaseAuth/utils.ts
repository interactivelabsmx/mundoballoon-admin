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

export function cleanObject(object: any) {
  const newObject = Object.keys(object).reduce((acc, key) => {
    const _acc = acc;
    if (object[key] === undefined) return _acc;
    if (typeof object[key] === 'object') {
      _acc[key] = cleanObject(object[key]);
    } else {
      _acc[key] = object[key];
    }
    return _acc;
  }, {});
  return newObject;
}

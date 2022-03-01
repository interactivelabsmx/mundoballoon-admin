import {
  Auth,
  onAuthStateChanged,
  signOut,
  User,
  getAuth,
} from '@firebase/auth';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  useCallback,
} from 'react';
import '@lib/firebaseAuth/firebaseClient';
import {
  FI,
  FI_COOKIE_OPTIONS,
  checkForExpiredCookieToken,
} from '@lib/firebaseAuth/utils';

interface IAuthContext {
  user?: User;
  auth?: Auth;
  onAuth: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  onAuth: () => null,
  logout: () => null,
});

interface IAuthProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProvider) {
  const [auth, setAuth] = useState<Auth | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const { push } = useRouter();

  const onAuth = useCallback(
    async (user: User) => {
      setCookie({}, FI, await user.getIdToken(), FI_COOKIE_OPTIONS);
      setUser(user);
    },
    [setUser]
  );

  const refreshIdToken = useCallback(async () => {
    setCookie({}, FI, (await user?.getIdToken(true)) || '', FI_COOKIE_OPTIONS);
  }, [user]);

  const logout = useCallback(() => {
    if (auth) signOut(auth).then(() => push('/'));
    destroyCookie(null, FI, { path: '/' });
    setUser(undefined);
  }, [setUser, auth, push]);

  useEffect(() => checkForExpiredCookieToken(refreshIdToken), [refreshIdToken]);

  useEffect(() => setAuth(getAuth()), []);

  useEffect(() => {
    if (auth)
      onAuthStateChanged(auth, (user) => {
        if (user) onAuth(user);
      });
  }, [auth, logout, onAuth]);

  return (
    <AuthContext.Provider value={{ user, auth, onAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

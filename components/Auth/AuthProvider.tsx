import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  useCallback,
} from 'react';
// import nookies from 'nookies';
import {
  Auth,
  onAuthStateChanged,
  signOut,
  User,
  getAuth,
} from '@firebase/auth';
import { useRouter } from 'next/router';

import '../../lib/firebaseAuth/firebaseClient';

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
  const [auth, setAuth] = useState<Auth>(null);
  const [user, setUser] = useState<User | null>(null);
  const { push } = useRouter();

  const onAuth = useCallback(
    async (user: User) => {
      localStorage.setItem('ft', await user.getIdToken());
      setUser(user);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.setItem('ft', null);
    signOut(auth).then(() => push('/'));
  }, [setUser, auth, push]);

  useEffect(() => {
    setAuth(getAuth());
  }, []);

  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          onAuth(user);
        }
      });
    }
  }, [auth, logout, onAuth]);

  return (
    <AuthContext.Provider value={{ user, auth, onAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

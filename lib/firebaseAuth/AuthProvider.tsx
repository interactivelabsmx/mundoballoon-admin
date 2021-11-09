import React, { useState, useEffect, useContext, createContext } from 'react';
// import nookies from 'nookies';
import { Auth, signOut, User } from '@firebase/auth';
import { getAuth } from '@firebase/auth';

import './firebaseClient';
import { useRouter } from 'next/router';

interface IAuthContext {
  user?: User;
  auth?: Auth;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  auth: null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }: any) {
  const [auth, setAuth] = useState<Auth>(null);
  const [user, setUser] = useState<User | null>(null);
  const { replace } = useRouter();
  const login = (user: User) => setUser(user);
  const logout = () => {
    setUser(null);
    signOut(auth).then(() => replace('/'));
  };
  useEffect(() => {
    setAuth(getAuth());
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

import { vi } from 'vitest';

// MOCK FIREBASE AND USER
const auth = {
  verifyIdToken: () => ({
    uid: '123',
  }),
  getUser: () => ({
    uid: '123',
    email: 'test@mail.com',
    emailVerified: true,
    displayName: 'Test User',
  }),
};
const user = { getIdToken: () => '1234' };

vi.mock('firebase-admin/app', () => ({
  getApps: vi.fn(() => [1]),
  cert: vi.fn(() => ({ getAccessToken: () => '12345' })),
  initializeApp: vi.fn(() => Promise.resolve('initializeApp')),
}));

vi.mock('firebase-admin/auth', () => ({
  getAuth: vi.fn(() => Promise.resolve(auth)),
}));

vi.mock('@firebase/app', () => ({
  getApps: vi.fn(() => [1]),
  initializeApp: vi.fn(() => Promise.resolve('initializeApp')),
}));

vi.mock('@firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(() =>
    Promise.resolve('createUserWithEmailAndPassword')
  ),
  signInWithEmailAndPassword: vi.fn(() =>
    Promise.resolve('signInWithEmailAndPassword')
  ),
  signInWithPopup: vi.fn(() => Promise.resolve('signInWithPopup')),
  onAuthStateChanged: vi.fn(() => ({ user })),
  signOut: vi.fn(() => Promise.resolve('signOut')),
  getAuth: vi.fn(() => Promise.resolve(auth)),
  FacebookAuthProvider: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  RecaptchaVerifier: vi.fn(),
}));

// MOCK ROUTER AND WINDOW FUNCTIONS
// const IntersectionObserverMock = vi.fn(() => ({
//   disconnect: vi.fn(),
//   observe: vi.fn(),
//   takeRecords: vi.fn(),
//   unobserve: vi.fn(),
// }));

// vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.mock('next/router', () => require('next-router-mock'));
vi.mock('next/dist/client/router', () => require('next-router-mock'));

// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import { jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

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

jest.mock('firebase-admin/app', () => ({
  getApps: jest.fn(() => [1]),
  cert: jest.fn(() => ({ getAccessToken: () => '12345' })),
  initializeApp: jest.fn(() => Promise.resolve('initializeApp')),
}));

jest.mock('firebase-admin/auth', () => ({
  getAuth: jest.fn(() => Promise.resolve(auth)),
}));

jest.mock('@firebase/app', () => ({
  getApps: jest.fn(() => [1]),
  initializeApp: jest.fn(() => Promise.resolve('initializeApp')),
}));

jest.mock('@firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(() =>
    Promise.resolve('createUserWithEmailAndPassword')
  ),
  signInWithEmailAndPassword: jest.fn(() =>
    Promise.resolve('signInWithEmailAndPassword')
  ),
  signInWithPopup: jest.fn(() => Promise.resolve('signInWithPopup')),
  onAuthStateChanged: jest.fn(() => ({ user })),
  signOut: jest.fn(() => Promise.resolve('signOut')),
  getAuth: jest.fn(() => Promise.resolve(auth)),
  FacebookAuthProvider: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  RecaptchaVerifier: jest.fn(),
}));

jest.mock('next/dist/client/router', () => require('next-router-mock'));

import { initializeApp } from 'firebase/app';

const CLIENT_CONFIG = {
  apiKey: 'AIzaSyDGCFoykUUvq6Ztl5EhTRL9QhuOXzl9oo0', // required
  authDomain: 'mundoballoon-dev.firebaseapp.com',
  databaseURL: 'https://mundoballoon-dev.firebaseio.com',
  projectId: 'mundoballoon-dev',
};

if (typeof window !== 'undefined') {
  initializeApp(CLIENT_CONFIG);
}

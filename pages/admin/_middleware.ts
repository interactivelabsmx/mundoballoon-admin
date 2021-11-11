import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { NextResponse } from 'next/server';

import '../../lib/firebaseAuth/firebaseClient';
import { CLIENT_CONFIG } from '../../lib/firebaseAuth/firebaseClient';

export function middleware() {
  initializeApp(CLIENT_CONFIG);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    NextResponse.redirect('/login');
  }

  return NextResponse.next();
}

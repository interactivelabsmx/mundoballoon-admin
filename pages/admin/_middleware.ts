import { NextResponse } from 'next/server';

export async function middleware() {
  const authUser = {};
  console.log(authUser);

  return NextResponse.next();
}

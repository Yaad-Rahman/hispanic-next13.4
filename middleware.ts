import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware() {
  // request: NextRequest
  // if (!user) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};

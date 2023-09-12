import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { toast } from 'react-toastify';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (!request.cookies.has('token')) {
    toast.warning('Please login to view events');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();

  // request: NextRequest
  // if (!user) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/events/:path*', '/profile'],
};

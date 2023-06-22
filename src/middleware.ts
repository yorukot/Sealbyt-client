import GetVerifyPerssiom from '@/function/Get/HelloWorld';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/me') || request.nextUrl.pathname.startsWith('/friend') ){
    if(!request.cookies.has('accessToken')) return NextResponse.rewrite(new URL('/login', request.url));
    const VerifyPerssiom:Response = await GetVerifyPerssiom(String(request.cookies.get('accessToken')?.value))
    if(VerifyPerssiom.status === 200) return NextResponse.next();
    return NextResponse.rewrite(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/me', '/me/:path*', '/friend'],
};
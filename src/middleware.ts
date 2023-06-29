import GetVerifyPerssiom from '@/function/Get/HelloWorld';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import MiddlewareRefreshToken from './function/Get/MiddlewareRefreshToken';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/me') || request.nextUrl.pathname.startsWith('/friend') ){
    const VerifyPerssiom:Response = await GetVerifyPerssiom(request.headers)
    if(VerifyPerssiom.status === 200) return NextResponse.next();
    const data = await MiddlewareRefreshToken(request.headers);
    if (data.status === 401) return NextResponse.rewrite(new URL('/login', request.url));
    const response = NextResponse.next();
    const accessTokenRegex = /accessToken=([^;]+)/;
    const accessTokenMatch = data.headers.get('set-cookie').match(accessTokenRegex);
    const refreshTokenRegex = /refreshToken=([^;]+)/;
    const refreshTokenMatch = data.headers.get('set-cookie').match(refreshTokenRegex);
    response.cookies.set('accessToken', accessTokenMatch[1]);
    response.cookies.set('refreshToken', refreshTokenMatch[1]);
    return response
  }
}

export const config = {
  matcher: ['/me', '/me/:path*', '/friend'],
};
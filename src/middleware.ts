import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const Path = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value || ''

    console.log('Toke:::', token)
  const publicPath = Path === '/signup' || Path === '/signin' || Path === "/verifyemail"

    console.log('request.url', request.url)
    console.log(`Request received for ${request.nextUrl.pathname}`);


    if (publicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // if (!publicPath && !token) {
  //   return NextResponse.redirect(new URL('/signin', request.url))
  // }

    // return NextResponse.redirect(new URL('/', request.url))
}
 
// export const config = {
//   matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
// }
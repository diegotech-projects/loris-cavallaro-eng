// import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// export default authMiddleware({
//   publicRoutes: (req: NextRequest) =>
//     !req.nextUrl.pathname.startsWith('/dashboard'),
//   // eslint-disable-next-line consistent-return
//   afterAuth(auth, req) {
//     // handle users who aren't authenticated
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }
//   },
// });

export async function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};

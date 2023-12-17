import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// the protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the security and performance of your application.
export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    // to specify that it should run on specific paths.
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
import type { NextAuthConfig } from 'next-auth';

// This object will contain the configuration options for NextAuth.js. 
// This will prevent users from accessing the dashboard pages unless they are logged in.
export const authConfig = {
    pages: {
        //the user will be redirected to our custom login page, rather than the NextAuth.js default page.
        signIn: '/login',
    },
    // verify if the request is authorized to access a page via Next.js Middleware
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

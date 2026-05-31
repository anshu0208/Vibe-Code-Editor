import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./modules/auth/actions";

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(db),

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async signIn() {
            return true;
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            token.role = existingUser.role;
            return token;
        },

        async session({ session, token }) {
            if (!session.user) return session;

            session.user.id = token.sub!;
            session.user.role = token.role;

            return session;
        },
    },

    secret: process.env.AUTH_SECRET,
    ...authConfig,
});

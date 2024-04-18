import { DefaultSession, DefaultUser, type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import OtpGenerator from "otp-generator";
import { Resend } from "resend";
import GitHubProvider from "next-auth/providers/github";

import { db } from "@repo/db";

import { env } from "../env.mjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // if (user) {
      //   token.role = user.role;
      // }
      return token;
    },
    async session({ session, token }) {
      // if (token?.role) {
      //   //@ts-ignore
      //   session.user.role = token.role;
      // }
      // //add the user id to the session
      // session.user.id = token.sub ?? "";
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    })
  ],
};

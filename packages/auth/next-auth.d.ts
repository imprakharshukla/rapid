import { DefaultSession } from "next-auth";

import "next-auth";


declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
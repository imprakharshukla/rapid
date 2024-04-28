import { cn } from "@repo/ui/utils";
import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "~/styles/globals.css";
import { BaseLayout } from "./base-layout";
import { ToastProvider, TailwindIndicator } from "@repo/ui";
import { AuthSessionProvider } from "~/providers/auth-session-provider";
import QueryProvider from "~/providers/query-provider";
import { ThemeProvider } from "~/providers/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapid | A typesafe Turborepo Express starter with TS-Rest",
  description: "Rapid a starter kit to jumpstart your typeful apps. It is a monorepo that is built on top of NextJs, ExpressJS, TS-Rest, Shadcn/UI, Tailwind, NextAuth",
  openGraph: {
    images: ['https://rapid.prakhar.codes/rapid_og_image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, "bg-background")}>
        <AuthSessionProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              <ToastProvider />
              <BaseLayout children={children} />
              <TailwindIndicator />
            </ThemeProvider>
          </QueryProvider>
        </AuthSessionProvider>
      </body >
    </html >
  );
}

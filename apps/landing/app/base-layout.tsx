"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserCircle } from "lucide-react";

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@repo/ui";
import { cn } from "@repo/ui/utils";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "~/app/features/ui/themeToggle";
import { signOut } from "next-auth/react";

export function BaseLayout({ children }: { children: React.ReactNode }) {
    const navigationLinks = [
        {
            title: "Category",
            href: "/category",
        },
    ];

    const currentPath = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");
    const router = useRouter()

    useEffect(() => {
        setActiveTab(currentPath);
    }, [currentPath]);
    return (
        <div >
            <div className="z-50 flex min-h-screen w-full flex-col">
                <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                    <nav className="flex flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <Link
                            href="/shop"
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        >
                            <span className="text break-keep">Rapid⚡</span>
                        </Link>
                    </nav>

                    <div className="flex w-full items-center justify-end gap-2 md:ml-auto md:gap-2 lg:gap-2">
                        <div className="">
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
                <main className="min-h-[calc(100vh_-_theme(spacing.16))] bg-background py-2 md:px-5 md:py-10">
                    {/* <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-4 text-sm text-muted-foreground">
              <Link href="#" className="font-semibold text-primary">
                General
              </Link>
              <Link href="#">Security</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Support</Link>
              <Link href="#">Organizations</Link>
              <Link href="#">Advanced</Link>
            </nav>
          </div> */}

                    {children}
                </main>
            </div>
        </div >
    );
}

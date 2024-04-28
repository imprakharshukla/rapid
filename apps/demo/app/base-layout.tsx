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
                    <nav className="flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        >
                            <span className="text">Rapid⚡</span>
                        </Link>
                    </nav>
                    {/* <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav
                                className={cn(
                                    "grid gap-6 text-lg font-medium",

                                )}
                            >
                                {navigationLinks.map((link) => {
                                    return (
                                        <Link
                                            href={link.href}
                                            key={link.title}
                                            className={cn(
                                                activeTab.includes(link.title.toLowerCase())
                                                    ? "text-foreground"
                                                    : "text-muted-foreground",
                                                "transition-colors hover:text-foreground",
                                            )}
                                        >
                                            {link.title}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet> */}
                    <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-2">
                        <form className="ml-auto flex-1 sm:flex-initial">
                            {/* <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div> */}
                        </form>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <UserCircle className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <span className="p-2 text-sm text-muted-foreground">
                                    Welcome
                                </span>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => {
                                        signOut();
                                    }}
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="">
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-background py-2 px-4 md:px-5 md:py-10">
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

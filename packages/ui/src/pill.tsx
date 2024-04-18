import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";
const pillVariants = cva(
    "text-xs font-medium me-2 px-2.5 py-1 rounded-[0.75em]",
    {
        variants: {
            variant: {
                red: "bg-red-200/60 text-red-700 dark:bg-red-900/60 dark:text-red-300/90",
                blue: "bg-blue-200/60 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300/90",
                teal: "bg-teal-200/60 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300/90",
                purple: "bg-purple-200/60 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300/90",
                cyan: "bg-cyan-200/60 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-300/90",
                fuchsia: "bg-fuchsia-200/60 text-fuchsia-700 dark:bg-fuchsia-900/60 dark:text-fuchsia-300/90",
                gray: "bg-gray-200/60 text-gray-700 dark:bg-gray-900/60 dark:text-gray-300/90",
                green: "bg-green-200/60 text-green-700 dark:bg-green-900/60 dark:text-green-300/90",
                indigo: "bg-indigo-200/60 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300/90",
                lime: "bg-lime-200/60 text-lime-700 dark:bg-lime-900/60 dark:text-lime-300/90",
                orange: "bg-orange-200/60 text-orange-700 dark:bg-orange-900/60 dark:text-orange-300/90",
                pink: "bg-pink-200/60 text-pink-700 dark:bg-pink-900/60 dark:text-pink-300/90",
                violet: "bg-violet-200/60 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300/90",
                yellow: "bg-yellow-200/60 text-yellow-700 dark:bg-yellow-900/60 dark:text-yellow-300/90",
                slate: "bg-slate-200/60 text-slate-700 dark:bg-slate-900/60 dark:text-slate-300/90",
                zinc: "bg-zinc-200/60 text-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300/90",
                neutral: "bg-neutral-200/60 text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300/90",
                stone: "bg-stone-200/60 text-stone-700 dark:bg-stone-900/60 dark:text-stone-300/90",
                amber: "bg-amber-200/60 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300/90",
                emerald: "bg-emerald-200/60 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300/90",
                sky: "bg-sky-200/60 text-sky-700 dark:bg-sky-900/60 dark:text-sky-300/90",
                rose: "bg-rose-200/60 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300/90",
                default:
                    "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
                secondary:
                    "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
                destructive:
                    "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default", // Default variant as the default value
        },
    }
);

export interface PillProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> { }

function Pill({ className, variant, ...props }: PillProps) {
    return (
        <span className={cn(pillVariants({ variant }), className, "w-fit")} {...props} />
    );
}

export { Pill, pillVariants };

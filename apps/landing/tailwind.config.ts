import type { Config } from "tailwindcss";

import baseConfig from "@repo/tailwind-config";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{ts,tsx,mdx}",
    ],
    presets: [baseConfig],
    theme: {
        extend: {
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate"),
        require("@tailwindcss/aspect-ratio"),
    ],
} satisfies Config;
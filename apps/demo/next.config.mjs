// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import("next").NextConfig} */
const config = {
  // @ts-ignore
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
  transpileModules: ["@repo/ui"],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;

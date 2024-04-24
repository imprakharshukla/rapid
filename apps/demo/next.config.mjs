// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import WebpackBar from "webpackbar";
/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
     config.plugins.push(
       new WebpackBar({
         fancy: true,
         profile: true,
         basic: false,
       })
     );

    return config;
  },
  /** Enables hot reloading for local packages without a build step */

  transpilePackages: ["@repo/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

/** @type {import("next").NextConfig} */
const config = {
  /** Enables hot reloading for local packages without a build step */

  transpilePackages: ["@repo/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;

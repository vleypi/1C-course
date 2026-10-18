import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: {
    root: path.join(__dirname, ".."),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [require.resolve("remark-gfm")],
    rehypePlugins: [
      [require.resolve("rehype-pretty-code"), { theme: "github-dark-dimmed", keepBackground: false }],
    ],
  },
});

export default withMDX(nextConfig);

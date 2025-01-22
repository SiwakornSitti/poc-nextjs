import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: [
    "@tanstack/react-query",
    "@tanstack/query-core",
    "tailwind-merge",
  ],
};

export default withExportImages(nextConfig);

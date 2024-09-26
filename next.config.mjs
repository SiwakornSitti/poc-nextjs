import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    transpilePackages: ['@tanstack/react-query','@tanstack/query-core','tailwind-merge']
};

export default withExportImages(nextConfig);

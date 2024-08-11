/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
};

export default nextConfig;

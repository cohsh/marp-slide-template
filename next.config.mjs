/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/marp-slide-template/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/marp-slide-template' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
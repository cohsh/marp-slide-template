/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/marp-webslide-template/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/marp-webslide-template' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
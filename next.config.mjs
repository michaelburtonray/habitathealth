/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
    loader: 'custom',
    loaderFile: './sanity/sanityImageLoader.js',
  },
};

export default nextConfig;

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
  async redirects() {
    return [
      {
        source: '/refer',
        destination: '/check-eligibility',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/what-is-pace',
        destination: '/how-it-works',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

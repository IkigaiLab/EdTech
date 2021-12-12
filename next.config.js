module.exports = {
  reactStrictMode: true,
  // webpack5: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
      {
        source: '/challenges',
        destination: '/challenges/upcoming',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/events/upcoming',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/execute',
        destination: 'https://api.jdoodle.com/execute',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

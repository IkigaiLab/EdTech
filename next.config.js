module.exports = {
  reactStrictMode: true,
  webpack5: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ];
  },
};

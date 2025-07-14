/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fleetback-public-asset-bucket.s3.amazonaws.com", // сырттагы сүрөттөр үчүн
    ],
  },
};

module.exports = nextConfig;

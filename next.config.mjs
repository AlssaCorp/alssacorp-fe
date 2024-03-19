/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.alssacorp.co.id",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

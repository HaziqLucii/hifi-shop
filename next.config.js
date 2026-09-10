/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kx2kaqlxinzax2dn.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig

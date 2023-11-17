/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/__/auth/:path*",
        destination: "https://opensourcesocialmedia.firebaseapp.com/__/auth/:path*"
      },
    ]
  }
}

module.exports = nextConfig

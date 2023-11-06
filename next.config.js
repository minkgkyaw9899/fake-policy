/** @type {import('next').NextConfig} */
const nextConfig = {
  "output": "export",
  "distDir": "build",
  eslint: {
    ignoreDuringBuilds: true
  },
}

module.exports = nextConfig

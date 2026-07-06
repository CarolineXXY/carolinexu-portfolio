import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use this project as Turbopack root when multiple lockfiles exist (e.g. parent folder has package-lock.json)
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/carolinexu-portfolio',
  assetPrefix: '/carolinexu-portfolio/',
}

export default nextConfig



import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    output: 'export',
    basePath: '/carolinexu-portfolio',
    assetPrefix: '/carolinexu-portfolio/',
  }),
}

export default nextConfig

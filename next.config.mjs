/** @type {import('next').NextConfig} */
import createMdx from '@next/mdx'

const withMDX = createMdx({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: '*' },
      { protocol: 'https', hostname: '*' },
    ],
  },
}

// Apply MDX configuration to Next.js config
export default withMDX(nextConfig)

import nextMdx from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const options = {
  // Use one of Shiki's packaged themes
  theme: 'dracula-soft',
}

/** @type {import('next').NextConfig} */
const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
    providerImportSource: '@mdx-js/react',
  },
})

const nextConfig = {
  experimental: { scrollRestoration: true },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['images.microcms-assets.io', 'drive.google.com'],
  },
}

export default withMDX(nextConfig)

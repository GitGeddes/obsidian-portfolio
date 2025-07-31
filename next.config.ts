import type { NextConfig } from "next";
import nextMdx from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'export',
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  experimental: {
    mdxRs: true
  }
};

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.(md|mdx)$/,
  options: {/* otherOptions… */}
});

export default withMdx(nextConfig);

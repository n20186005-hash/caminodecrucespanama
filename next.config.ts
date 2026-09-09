import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  // 站点完全静态：静态导出到 out/，由 Cloudflare Workers Static Assets 托管。
  // 注意：请勿在此启用 OpenNext/standalone 部署，二者与 output:'export' 互斥。
  output: 'export',
  distDir: 'out',
  // 解决多lockfile警告
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);

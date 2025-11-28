import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // 如果没有使用外部图片源，这个配置可选
    domains: [], // 添加外部域名如果需要
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh-HK'],
  defaultLocale: 'en'
});

export const config = {
  // 关键：排除 _next/image 路径
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
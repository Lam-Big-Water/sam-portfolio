import { Geist, Geist_Mono } from "next/font/google";

import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import "./globals.css";
import { routing } from "@/i18n/routing";

import { cookies } from "next/headers";

import { ThemeProvider, Theme } from "../_context/themeProvider";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const saveTheme = (await cookies()).get("color-theme");
  const theme = (saveTheme?.value as Theme) || "light";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-svh flex justify-center items-center bg-gray-400 p-4`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

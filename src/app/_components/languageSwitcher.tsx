"use client";
import React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLang = locale === "zh-HK" ? "en" : "zh-HK";

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button onClick={() => handleLanguageChange(nextLang)} className="">
      <div className="flex gap-2 items-center">
        <span className="w-8 h-8 p-0.5 border border-black rounded-sm">
          {locale === "zh-HK" ? "中" : "A"}
        </span>
        <span>{locale === "zh-HK" ? "語言" : "Lang"}</span>
      </div>
    </button>
  );
}

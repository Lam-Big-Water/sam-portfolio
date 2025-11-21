'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'zh-HK', name: '繁體中文' },
        { code: 'en', name: 'English' }
    ];

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <select
            value={locale}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="border rounded px-3 py-1"
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
}
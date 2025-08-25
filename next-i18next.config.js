/** @type {import('next-i18next').UserConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: 'pl',
        locales: ['pl'],
        localeDetection: false,
    },
    detection: {
        order: ['cookie'],
        caches: ['cookie'],
        lookupCookie: 'NEXT_LOCALE',
        cookieOptions: {
            name: 'NEXT_LOCALE',
            secure: true,
            sameSite: 'strict',
        },
    },
};


module.exports = nextConfig;

import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { usePreserveScroll } from 'shared/lib/hooks';
import { theme } from 'shared/lib/themes';
import { GlobalStyle } from 'shared/ui';
import 'shared/ui/global.css';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import 'swiper/css';
import { PageTemplate } from 'widgets/page-template';

const App: FC<AppProps> = ({ Component, ...props }) => {
  const { asPath } = useRouter();

  usePreserveScroll();

  return (
    <>
      <Head>
        <html lang="pl" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="canonical"
          href={`https://domainhere.${asPath === '/' ? '' : asPath}`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/images/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/static/images/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/images/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/static/images/favicon.ico" />

        <link
          rel="preload"
          href="/static/fonts/Manrope-Light.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/static/fonts/Manrope-Regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/static/fonts/Manrope-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/static/fonts/Manrope-Bold.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>

      <StyleSheetManager enableVendorPrefixes>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <PageTemplate>
            <Component {...props.pageProps} />
          </PageTemplate>
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
};

export default appWithTranslation(App);

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Head from 'next/head';
import { getCookie, setCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
import { COOKIES_VARIABLES } from 'shared/constants/global';
import { Nullable } from 'shared/types/globlal';
import { AgeVerification } from 'widgets/age-verification';
import { CookiesConsent } from 'widgets/cookies-consent';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Container } from 'widgets/page-template/ui/styled';

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  const [t] = useTranslation();

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <Header />

      <Container>
        {children}

        <Footer />
      </Container>

      <AgeVerification />

      <CookiesConsent />
    </>
  );
};

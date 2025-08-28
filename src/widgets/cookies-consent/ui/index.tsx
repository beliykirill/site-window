import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie, setCookie } from 'cookies-next';
import { Trans, useTranslation } from 'next-i18next';
import { COOKIES_VARIABLES } from 'shared/constants/global';
import { AccentText, Button, ParagraphText } from 'shared/ui';
import { Container, TextContainer, Layout } from './styled';

const ONE_YEAR = 60 * 60 * 24 * 365;

const isCookiesAccepted = getCookie(COOKIES_VARIABLES.IS_COOKIES_ACCEPTED);

export const CookiesConsent: FC = () => {
  const [t] = useTranslation();

  const [isVisible, setVisible] = useState(false);

  const handleAcceptCookie = () => {
    setCookie(COOKIES_VARIABLES.IS_COOKIES_ACCEPTED, 'true', {
      maxAge: ONE_YEAR,
    });

    setVisible(false);
  };

  useEffect(() => {
    setVisible(!isCookiesAccepted);
  }, []);

  return (
    <Layout $isOpen={isVisible}>
      <Container>
        <TextContainer>
          <ParagraphText>{t('cookies_consent.title')}</ParagraphText>
          <AccentText>
            <Trans
              t={t}
              i18nKey="cookies_consent.description"
              components={[<Link key="description" href="/policy" />]}
            />
          </AccentText>
        </TextContainer>

        <Button onClick={handleAcceptCookie}>
          {t('cookies_consent.button')}
        </Button>
      </Container>
    </Layout>
  );
};

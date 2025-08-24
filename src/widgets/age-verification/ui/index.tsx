import { FC, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';
import { COOKIES_VARIABLES } from 'shared/constants/global';
import {
  AccentText,
  Button,
  DisabledScrollStyle,
  ParagraphText,
} from 'shared/ui';
import { Container, Layout, Logo, TextContainer } from './styled';

const lastVerification = getCookie(COOKIES_VARIABLES.LAST_VERIFICATION);
const currentDate = format(Date.now() / 1000, 'dd');

export const AgeVerification: FC = () => {
  const [t] = useTranslation();

  const [hasVerification, setVerification] = useState(false);

  useEffect(() => {
    setVerification(
      !lastVerification
        ? true
        : format(+lastVerification / 1000, 'dd') !== currentDate,
    );
  }, []);

  useEffect(() => {
    if (!hasVerification) return;

    setCookie(COOKIES_VARIABLES.LAST_VERIFICATION, Date.now());
  }, [hasVerification]);

  return (
    <>
      {hasVerification && <DisabledScrollStyle />}

      <Layout $isOpen={hasVerification}>
        <Container>
          <Logo src="/static/images/logo.webp" alt="Elemental: 2D MMORPG" />

          <TextContainer>
            <ParagraphText>{t('age_verification.title')}</ParagraphText>

            <AccentText>{t('age_verification.description')}</AccentText>
          </TextContainer>

          <Button onClick={() => setVerification(false)}>
            {t('age_verification.button')}
          </Button>
        </Container>
      </Layout>
    </>
  );
};

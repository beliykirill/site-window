import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { AccentText, Button } from 'shared/ui';
import { SecondaryText } from 'shared/ui/secondary-text';
import { Container, Logo, RoutesContainer, Wrapper } from './styled';

export const Header: FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo src="/static/images/logo.webp" alt="Elemental: 2D MMORPG" />
        </Link>

        <RoutesContainer>
          <Link href="/#main">
            <SecondaryText>{t('header.routes.main')}</SecondaryText>
          </Link>
          <Link href="/#about">
            <SecondaryText>{t('header.routes.about')}</SecondaryText>
          </Link>
          <Link href="/#previews">
            <SecondaryText>{t('header.routes.previews')}</SecondaryText>
          </Link>
        </RoutesContainer>
      </Wrapper>

      <Button>{t('header.button')}</Button>
    </Container>
  );
};

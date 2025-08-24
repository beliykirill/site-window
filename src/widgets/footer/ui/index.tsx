import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { CaptionText } from 'shared/ui';
import { SecondaryText } from 'shared/ui/secondary-text';
import {
  Container,
  Icon,
  IconsContainer,
  Layout,
  RoutesContainer,
  Section,
} from './styled';

export const Footer: FC = () => {
  const [t] = useTranslation();

  return (
    <Layout>
      <Container>
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

        <IconsContainer>
          <a href="https://www.gamcare.org.uk/" target="_blank">
            <Icon src="/static/images/footer/gamcare.png" alt="GamCare" />
          </a>
          <a href="https://www.gambleaware.org/" target="_blank">
            <Icon
              src="/static/images/footer/gamble-aware.png"
              alt="GambleAware"
            />
          </a>
          <a href="https://gordonmoody.org.uk/" target="_blank">
            <Icon
              src="/static/images/footer/gordon-moody.png"
              alt="Gordon Moody"
            />
          </a>
        </IconsContainer>

        <RoutesContainer>
          <a href="https://anj.fr/">
            <SecondaryText>ANJ</SecondaryText>
          </a>
          <Link href="/about-us">
            <SecondaryText>{t('footer.agreements.about_us')}</SecondaryText>
          </Link>
          <Link href="/policy">
            <SecondaryText>{t('footer.agreements.policy')}</SecondaryText>
          </Link>
          <Link href="/terms">
            <SecondaryText>{t('footer.agreements.terms')}</SecondaryText>
          </Link>
          <Link href="/cookies">
            <SecondaryText>{t('footer.agreements.cookies')}</SecondaryText>
          </Link>
        </RoutesContainer>
        <RoutesContainer></RoutesContainer>
      </Container>
      <Section>
        <CaptionText>{t('footer.license')}</CaptionText>
      </Section>
    </Layout>
  );
};

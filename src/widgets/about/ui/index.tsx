import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { AccentText, SectionText } from 'shared/ui';
import { Container, CoverImage, Layout, TextContainer } from './styled';

export const About: FC = () => {
  const [t] = useTranslation('home');

  return (
    <Layout>
      <Container>
        <TextContainer>
          <SectionText>{t('about.title')}</SectionText>

          <AccentText
            dangerouslySetInnerHTML={{ __html: t('about.description') }}
          />
        </TextContainer>

        <CoverImage>
          <Image
            src="/static/images/about/cover.webp"
            fill
            loading="lazy"
            alt="About Elemental: 2D MMORPG"
          />
        </CoverImage>
      </Container>
    </Layout>
  );
};

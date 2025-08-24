import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Button, CaptionText, HeadlineText } from 'shared/ui';
import { SecondaryText } from 'shared/ui/secondary-text';
import {
  Layout,
  Container,
  BackgroundVideo,
  Shadow,
  TextContainer,
} from './styled';

export const Main: FC = () => {
  const [t] = useTranslation('home');

  return (
    <Layout>
      <BackgroundVideo
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://i.ytimg.com/vi/j6B4PwPQbIE/hqdefault.jpg"
      >
        <source
          src="https://play-games.googleusercontent.com/vp/mp4/1280x720/j6B4PwPQbIE.mp4"
          type="video/mp4"
        />
      </BackgroundVideo>

      <Shadow />

      <Container>
        <TextContainer>
          <HeadlineText>{t('main.title')}</HeadlineText>
          <SecondaryText>{t('main.description')}</SecondaryText>
        </TextContainer>

        <Button>{t('main.button')}</Button>
      </Container>
    </Layout>
  );
};

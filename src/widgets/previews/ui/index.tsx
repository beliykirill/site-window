import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { SectionText } from 'shared/ui';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Container, ImageWrapper, SwiperContainer } from './styled';

const previews = Array.from({ length: 8 }, (_, i) => i + 1);

export const Previews: FC = () => {
  const [t] = useTranslation('home');

  return (
    <Container id="previews">
      <SectionText>{t('previews.title')}</SectionText>

      <SwiperContainer
        slidesPerView={4}
        spaceBetween={16}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
      >
        {previews.map((preview) => (
          <SwiperSlide key={preview}>
            <ImageWrapper>
              <Image
                src={`/static/images/previews/${preview}.webp`}
                fill
                loading="lazy"
                alt={`Preview (${preview}) Elemental: 2D MMORPG`}
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  );
};

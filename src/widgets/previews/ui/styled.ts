import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 160px 0;

  .swiper {
    width: 100% !important;
  }

  & > :not(:first-child) {
    margin-top: 24px;
  }

  ${COMMON_MEDIA.MOBILE} {
    padding: 80px 20px;
  }
`;

export const SwiperContainer = styled(Swiper)`
  overflow-x: clip;
`;

export const ImageWrapper = styled.div`
  width: 358px;
  height: 537px;
  border-radius: 8px;

  img {
    border-radius: 8px;
    border: 4px solid ${color('surfaceSecondary')};
  }

  ${COMMON_MEDIA.MOBILE} {
    height: 300px;
  }
`;

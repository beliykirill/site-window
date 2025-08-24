import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import { AccentText } from 'shared/ui';
import styled from 'styled-components';

export const Layout = styled.section`
  border-radius: 16px;
  padding: 80px;
  margin-top: 160px;

  ${COMMON_MEDIA.MOBILE} {
    margin-top: 80px;
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;

  & > :not(:first-child) {
    margin: 0 0 0 40px;
  }

  ${COMMON_MEDIA.MOBILE} {
    flex-direction: column;

    & > :not(:first-child) {
      margin: 40px 0 0 0;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${AccentText} {
    white-space: pre-wrap;

    strong {
      font-weight: 700;
    }
  }

  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const CoverImage = styled.div`
  position: relative;
  width: 350px;
  height: 525px;
  border-radius: 4px;
  border: 4px solid ${color('surfaceSecondary')};
  flex-shrink: 0;
  z-index: 1;

  img {
    border-radius: 4px;
  }

  ${COMMON_MEDIA.MOBILE} {
    width: 100%;
  }
`;

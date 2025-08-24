import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import styled from 'styled-components';

export const Layout = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.25) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 3;

  button {
    width: 208px;
  }

  & > :not(:first-child) {
    margin-top: 24px;
  }

  ${COMMON_MEDIA.MOBILE} {
    padding: 0 20px;

    button {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  text-align: center;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;

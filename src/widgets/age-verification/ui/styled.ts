import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const Layout = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10002;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: 0.2s ease-in-out;
  visibility: hidden;
  opacity: 0;

  ${ifProp(
    '$isOpen',
    css`
      visibility: visible;
      opacity: 1;
    `,
  )};
`;

export const Container = styled.div`
  max-width: 818px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 16px;
  margin: 0 auto;
  background: ${color('surfaceBrand')};
  box-shadow: 0 0 70px 4px ${color('surfaceMain')};

  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 650px;

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
`;

import { color } from 'shared/lib/themes';
import { AccentText } from 'shared/ui';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const Layout = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10001;
  left: 0;
  background: ${color('surfaceBrand')};
  padding: 40px 20px;
  border-radius: 8px 8px 0 0;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;

  ${ifProp(
    '$isOpen',
    css`
      transform: translateY(0);
    `,
  )}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${AccentText} a {
    cursor: pointer;

    color: ${color('textLink')};
    text-decoration: underline;
  }

  & > :not(:first-child) {
    margin-top: 8px;
  }
`;

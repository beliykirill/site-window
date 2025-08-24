import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import { SecondaryText } from 'shared/ui/secondary-text';
import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color('surfaceBrand')};
  z-index: 999;

  ${COMMON_MEDIA.MOBILE} {
    padding: 8px 20px;
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 40px;
  }
`;

export const RoutesContainer = styled.div`
  display: flex;
  align-items: center;

  ${SecondaryText} {
    transition: 0.2s ease-in-out;
  }

  & > :not(:first-child) {
    margin-left: 40px;
  }

  ${COMMON_MEDIA.HOVER} {
    ${SecondaryText}:hover {
      color: ${color('textLink')};
    }
  }

  ${COMMON_MEDIA.MOBILE} {
    display: none;
  }
`;

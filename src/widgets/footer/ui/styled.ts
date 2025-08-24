import { rgba } from 'polished';
import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import { CaptionText } from 'shared/ui';
import { SecondaryText } from 'shared/ui/secondary-text';
import styled from 'styled-components';

export const Layout = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => rgba(color('surfaceBrand')(p), 0.65)};
  padding: 12px 20px;

  ${CaptionText} {
    white-space: pre-wrap;
    text-align: center;
    color: ${(p) => rgba(color('textMain')(p), 0.5)};
  }
`;

export const Container = styled.div`
  background: ${color('surfaceBrand')};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > :not(:first-child) {
    margin-top: 40px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 24px;
  }
`;

export const Icon = styled.img`
  width: 120px;
  height: 56px;
  flex-shrink: 0;
  object-fit: contain;
`;

export const RoutesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  ${SecondaryText} {
    transition: 0.2s ease-in-out;
  }

  ${COMMON_MEDIA.HOVER} {
    ${SecondaryText}:hover {
      color: ${color('textLink')};
    }
  }
`;

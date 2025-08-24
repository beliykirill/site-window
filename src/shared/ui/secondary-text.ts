import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const secondaryTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  color: ${color('textMain')};

  ${COMMON_MEDIA.MOBILE} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const SecondaryText = styled.p`
  ${secondaryTextStyle};
`;

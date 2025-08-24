import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const headlineTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 143%;
  color: ${color('textMain')};

  ${COMMON_MEDIA.LAPTOP} {
    font-size: 48px;
    line-height: 150%;
  }

  ${COMMON_MEDIA.MOBILE} {
    font-size: 28px;
    line-height: 156%;
  }
`;

export const HeadlineText = styled.h1`
  ${headlineTextStyle};
`;

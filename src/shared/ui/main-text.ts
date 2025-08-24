import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const mainTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  color: ${color('textMain')};

  ${COMMON_MEDIA.MOBILE} {
    font-size: 18px;
    line-height: 155%;
  }
`;

export const MainText = styled.h4`
  ${mainTextStyle};
`;

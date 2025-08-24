import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const paragraphTextStyle = css`
  font-family: 'Trajan Sans Pro', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${color('textMain')};

  ${COMMON_MEDIA.MOBILE} {
    font-size: 20px;
    line-height: 120%;
  }
`;

export const ParagraphText = styled.h3`
  ${paragraphTextStyle};
`;

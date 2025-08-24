import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const sectionTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 141%;
  text-transform: uppercase;
  color: ${color('textMain')};

  ${COMMON_MEDIA.MOBILE} {
    font-size: 24px;
    line-height: 135%;
  }
`;

export const SectionText = styled.h2`
  ${sectionTextStyle};
`;

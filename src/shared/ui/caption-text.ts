import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const captionTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: ${color('textMain')};
`;

export const CaptionText = styled.p`
  ${captionTextStyle};
`;

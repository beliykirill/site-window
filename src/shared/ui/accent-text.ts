import { color } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const accentTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 155%;
  color: ${color('textMain')};
`;

export const AccentText = styled.p`
  ${accentTextStyle};
`;

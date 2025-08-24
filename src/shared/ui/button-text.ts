import { color, palette } from 'shared/lib/themes';
import styled, { css } from 'styled-components';

export const buttonMainTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  color: ${color('textMain')};
`;

export const buttonSecondaryTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 125%;
  text-transform: uppercase;
  color: ${color('textMain')};
`;

export const buttonSmallTextStyle = css`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  color: ${color('textMain')};
`;

export const ButtonMainText = styled.span`
  ${buttonMainTextStyle};
`;

export const ButtonSecondaryText = styled.span`
  ${buttonSecondaryTextStyle};
`;

export const ButtonSmallText = styled.span`
  ${buttonSmallTextStyle};
`;

import { ButtonHTMLAttributes, FC } from 'react';
import { COMMON_MEDIA } from 'shared/lib/responsive-media';
import { color } from 'shared/lib/themes';
import { buttonMainTextStyle } from 'shared/ui/button-text';
import styled from 'styled-components';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.button`
  padding: 12px 48px;
  width: max-content;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${color('surfacePrimary')};
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  ${buttonMainTextStyle};

  ${COMMON_MEDIA.HOVER} {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

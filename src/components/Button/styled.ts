import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

interface Props extends ThemeProps {
  variant?: 'main' | 'secondary';
}

export const StyledButton = styled.button<Props>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  height: 100%;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${props =>
    props.variant === 'main'
      ? props.theme.btnBackgroundColor.primary
      : props.theme.btnBackgroundColor.third};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowStyle.primary};
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.btnBackgroundColor.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

interface Props extends ThemeProps {
  variant?: 'search' | 'clear';
}

export const StyledButton = styled.button<Props>`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.medium};
  background-color: ${props =>
    props.variant === 'search'
      ? props.theme.btnBackgroundColor.primary
      : props.theme.btnBackgroundColor.third};
  color: ${props => props.theme.colors.primary};
  border: none;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  &:hover {
    box-shadow: ${props => props.theme.shadowStyle.primary};
  }
  &:active {
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.btnBackgroundColor.secondary};
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`;

import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const HamburgerButton = styled.button<ThemeProps>`
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.tiny};
  cursor: pointer;
`;

export const StyledIcon = styled.img`
  height: 100%;
`;

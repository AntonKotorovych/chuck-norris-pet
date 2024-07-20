import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledMenuContainer = styled.div<ThemeProps & { isOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundColorHamburgerMenu.primary};
  height: 25rem;
  width: 100%;
  position: absolute;
  transition: right 0.3s ease;
  right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  top: 3rem;
`;

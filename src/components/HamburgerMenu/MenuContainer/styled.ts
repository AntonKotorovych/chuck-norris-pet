import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

const openMenuAnimation = css`
  transition: right 0.3s ease;
`;

const closeMenuAnimation = css`
  transition: none;
`;

export const StyledMenuContainer = styled.div<ThemeProps & { isOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundColorHamburgerMenu.primary};
  height: 25rem;
  width: 100%;
  position: absolute;
  ${({ isOpen }) => (isOpen ? openMenuAnimation : closeMenuAnimation)}
  right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  top: 3rem;
`;

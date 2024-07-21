import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledContainer = styled.div<ThemeProps>`
  height: 100%;
  width: 15rem;
  font-size: inherit;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktopHD}) {
    width: 12rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 2.5rem;
  }
`;

export const StyledNotification = styled.span<ThemeProps>`
  color: ${({ theme }) => theme.errorColor.secondary};
  font-weight: bold;
  position: absolute;
  top: -25px;
`;

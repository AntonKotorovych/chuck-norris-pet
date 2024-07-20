import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledContainer = styled.div<ThemeProps>`
  height: 60%;
  width: 15rem;
  font-size: inherit;

  @media screen and (max-width: 1800px) {
    width: 12rem;
  }

  @media screen and (max-width: 1350px) {
    width: 8rem;
  }

  @media (max-width: 900px) {
    width: 60%;
    height: 2.5rem;
  }
`;

export const StyledNotification = styled.span<ThemeProps>`
  color: ${({ theme }) => theme.errorColor.secondary};
  font-weight: bold;
  position: absolute;
  top: -25px;
`;

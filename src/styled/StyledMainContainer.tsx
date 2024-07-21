import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledMainContainer = styled.div<ThemeProps>`
  margin: 3rem auto 0;
  width: 80%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 6rem;
  }
`;

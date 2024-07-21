import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledContainer = styled.div<ThemeProps>`
  width: 30%;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 70%;
    height: 4rem;
  }
`;

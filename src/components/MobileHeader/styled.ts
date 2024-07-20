import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledHeader = styled.header<ThemeProps>`
  display: none;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundColorHamburgerHeader.primary};
  height: 3rem;
  width: 100%;
  z-index: 2000;
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const StyledLogo = styled.img`
  height: 100%;
`;

export const StyledContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
`;

export const StyledWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

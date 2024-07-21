import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledModalOverlay = styled.div<ThemeProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.modalOverlay.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.backgroundColorListModal.primary};
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  max-width: 600px;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    max-width: 100%;
    height: calc(100vh - 3rem);
    border-radius: 0;
    top: 3rem;
  }
`;

export const StyledCloseWrapper = styled.div<ThemeProps>`
  display: flex;
  height: 2rem;
  width: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const StyledHeaderContainer = styled.header<ThemeProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 5px ${({ theme }) => theme.borderColor.primary} solid;
  padding-bottom: 1rem;
  margin-top: 15px;
`;

export const StyledContentContainer = styled.div<ThemeProps>`
  height: 60%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 70%;
  }
`;

export const StyledFooterContainer = styled.footer<ThemeProps>`
  border-top: 5px ${({ theme }) => theme.borderColor.primary} solid;
  height: 4.5rem;
  display: flex;
  align-items: center;
`;

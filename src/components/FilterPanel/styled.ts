import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledFilterPanel = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const StyledSection = styled.section<ThemeProps>`
  width: 100%;
  margin: auto;
  height: 5rem;
  display: flex;
  background-color: ${({ theme }) => theme.filterPanelBackgroundColor.primary};
  justify-content: space-around;
  position: sticky;
  top: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  z-index: 100;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};

  @media screen and (max-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSizes.tiny};
  }

  @media screen and (max-width: 800px) {
    height: 3.5rem;
  }
`;

export const StyledContainer = styled.div<ThemeProps>`
  height: 60%;
  width: 14rem;

  @media screen and (max-width: 1800px) {
    width: 13rem;
  }

  @media screen and (max-width: 1650px) {
    width: 10rem;
  }

  @media screen and (max-width: 1350px) {
    width: 9rem;
  }
`;

export const VerticalLineSeparator = styled.div<ThemeProps>`
  width: 2px;
  height: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.third};
`;

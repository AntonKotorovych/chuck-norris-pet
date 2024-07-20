import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledFilterPanel = styled.div`
  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

export const StyledSection = styled.section<ThemeProps>`
  width: 100%;
  padding: 20px 10px;
  margin: auto;
  height: 5rem;
  display: flex;
  gap: 20px;
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

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 60%;
    flex-direction: column;
  }
`;

export const StyledContainer = styled.div<ThemeProps>`
  height: 100%;
  flex: 1;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const VerticalLineSeparator = styled.div<ThemeProps>`
  width: 2px;
  height: 120%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.third};

  @media screen and (max-width: 900px) {
    width: 120%;
    height: 2px;
  }
`;

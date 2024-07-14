import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledSection = styled.section<ThemeProps>`
  width: 100%;
  margin: auto;
  height: 3rem;
  display: flex;
  background-color: ${({ theme }) => theme.filterPanelBackgroundColor.primary};
  justify-content: space-around;
  position: sticky;
  top: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: 5rem;
  z-index: 100;
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled.div<ThemeProps>`
  height: 60%;
  width: 12%;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const VerticalLineSeparator = styled.div<ThemeProps>`
  width: 2px;
  height: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.third};
  margin: 0 20px;
`;

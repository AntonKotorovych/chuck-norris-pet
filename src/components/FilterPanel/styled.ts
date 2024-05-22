import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledSection = styled.section<ThemeProps>`
  width: 100%;
  margin: auto;
  height: 3rem;
  display: flex;
  background-color: ${props => props.theme.filterPanelBackgroundColor.primary};
  justify-content: space-around;
  position: sticky;
  top: 0.5rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  height: 5rem;
  z-index: 100;
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled.div<ThemeProps>`
  height: 60%;
  width: 18%;
  font-size: ${props => props.theme.fontSizes.small};
`;

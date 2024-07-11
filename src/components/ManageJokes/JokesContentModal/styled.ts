import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledList = styled.ul<ThemeProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 0 0.7rem;
  height: 100%;
  overflow: auto;
`;

export const StyledNoJokesContainer = styled.div``;

export const StyledText = styled.span``;

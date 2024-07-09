import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledList = styled.ul<ThemeProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 0 0.7rem;
  height: 67%;
  overflow: auto;
`;

export const StyledText = styled.span<ThemeProps>`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledNoJokesContainer = styled.div`
  margin-top: 1rem;
`;

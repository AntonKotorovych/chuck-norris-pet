import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledSection = styled.section`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledList = styled.ul`
  list-style: none;
  width: 100%;
`;

export const StyledButtonContainer = styled.div`
  height: 2.5rem;
  width: 13%;
`;

export const StyledNoJokesContainer = styled.div<ThemeProps>`
  padding: 3rem;
  background-color: ${({ theme }) => theme.backgroundColorListItem.primary};
  border: 3px ${({ theme }) => theme.borderColor.secondary} solid;
  color: ${({ theme }) => theme.colors.third};
`;

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const StyledListElement = styled.li<ThemeProps>`
  border: 2px ${props => props.theme.borderColor.primary} solid;
  box-shadow: ${props => props.theme.shadowStyle.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 2rem 0;
  min-height: 11rem;
  opacity: 0;
  background-color: ${props => props.theme.backgroundColorListItem.primary};
  animation: ${fadeIn} 1.2s ease forwards;
`;

export const StyledJokeContainer = styled.div`
  width: 85%;
  margin: auto;
`;

export const StyledATag = styled.a<ThemeProps>`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${props => props.theme.colors.third};
  }
`;

export const StyledSpan = styled.span<ThemeProps>`
  font-size: ${props => props.theme.fontSizes.tiny};
`;

export const StyledJokeSpan = styled.span<ThemeProps>`
  font-style: italic;
  font-weight: bold;
  align-self: center;
  color: ${props => props.theme.colors.third};
`;

export const StyledJokeCategory = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const StyledFooterDiv = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const StyledJokeDiv = styled.div<ThemeProps>`
  border: 3px ${props => props.theme.borderColor.primary} solid;
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.backgroundColorListValue.primary};
  height: 60%;
  display: flex;
  padding: 2rem;
`;

export const StyledDiv = styled.div``;

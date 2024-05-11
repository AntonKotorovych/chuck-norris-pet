import { keyframes, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledTheme } from 'styled/theme';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const StyledSection = styled.section`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListElement = withTheme(styled.li<{ theme: StyledTheme }>`
  border: 2px ${props => props.theme.borderColor.primary} solid;
  box-shadow: ${props => props.theme.shadowStyle.primary};
  border-radius: 50px;
  margin: 2rem 0;
  height: 15rem;
  opacity: 0;
  background-color: ${props => props.theme.backgroundColorListItem.primary};
  animation: ${fadeIn} 1.2s ease forwards;
`);

export const StyledDiv = styled.div`
  height: 100%;
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledATag = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const StyledButtonDiv = styled.div`
  height: 2.5rem;
  width: 13%;
`;

export const StyledSpan = withTheme(styled.span<{ theme: StyledTheme }>`
  font-size: ${props => props.theme.fontSizes.tiny};
`);

export const StyledJokeSpan = withTheme(styled.span<{ theme: StyledTheme }>`
  font-style: italic;
  font-weight: bold;
  align-self: center;
  color: ${props => props.theme.colors.third};
`);

export const StyledJokeCategoryDiv = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;

export const StyledFooterDiv = withTheme(styled.div<{ theme: StyledTheme }>`
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > :first-child {
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
      color: ${props => props.theme.colors.third};
    }
  }
`);

export const StyledJokeDiv = withTheme(styled.div<{ theme: StyledTheme }>`
  border: 3px ${props => props.theme.borderColor.primary} solid;
  border-radius: 20px;
  background-color: ${props => props.theme.backgroundColorListValue.primary};
  height: 70%;
  display: flex;
  padding: 2rem;
`);

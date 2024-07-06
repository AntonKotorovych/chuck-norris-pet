import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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
  border: 2px ${({ theme }) => theme.borderColor.primary} solid;
  box-shadow: ${({ theme }) => theme.shadowStyle.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: 2rem 0;
  min-height: 11rem;
  opacity: 0;
  background-color: ${({ theme }) => theme.backgroundColorListItem.primary};
  animation: ${fadeIn} 1.2s ease forwards;
`;

export const StyledJokeContainer = styled.div`
  width: 85%;
  margin: auto;
`;

export const StyledATag = styled.a<ThemeProps>`
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  padding: 0 3px;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const StyledLink = styled(Link)<ThemeProps>`
  text-decoration: none;
  color: inherit;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const StyledSpan = styled.span<ThemeProps>`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
`;

export const StyledJokeSpan = styled.span<ThemeProps>`
  font-style: italic;
  font-weight: bold;
  align-self: center;
  color: ${({ theme }) => theme.colors.third};
`;

export const StyledJokeCategory = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const StyledCategoryBtnWrapper = styled.div<ThemeProps>`
  width: 5.8rem;
  display: flex;
  margin: 0 1rem;

  & button {
    text-transform: ${({ theme }) => theme.textTransform.primary};
  }
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterDiv = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const StyledJokeDiv = styled.div<ThemeProps>`
  border: 3px ${({ theme }) => theme.borderColor.primary} solid;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.backgroundColorListValue.primary};
  height: 60%;
  display: flex;
  padding: 2rem;
`;

export const StyledDiv = styled.div``;

export const StyledLinksContainer = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
`;

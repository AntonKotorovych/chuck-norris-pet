import { keyframes, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledTheme } from 'styled/theme';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  8% {
    transform: scale(1.05);
  }
  16% {
    transform: scale(1);
  }
  24% {
    transform: scale(1.05)
  }
  32% {
    transform: scale(1)
  }
`;

export const StyledSection = styled.section`
  height: 380px;
  margin-bottom: 2rem;
`;

export const StyledDiv = withTheme(styled.div<{ theme: StyledTheme }>`
  color: ${props => props.theme.colors.third};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-family: 'Poetsen One', sans-serif;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
    text-transform: uppercase;
  }
`);

export const StyledImg = styled.img`
  width: 450px;
  animation: ${pulseAnimation} 3s ease-in-out infinite;
`;

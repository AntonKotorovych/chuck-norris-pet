import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

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

export const StyledDiv = styled.div<ThemeProps>`
  color: ${props => props.theme.colors.third};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-family: ${props => props.theme.fontFamily.secondary};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
  }
`;

export const StyledImg = styled.img`
  width: 450px;
  animation: ${pulseAnimation} 3s ease-in-out infinite;
`;

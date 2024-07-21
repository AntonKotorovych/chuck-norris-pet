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

export const StyledSection = styled.section<ThemeProps>`
  height: 380px;
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 280px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 190px;
  }
`;

export const StyledDiv = styled.div<ThemeProps>`
  color: ${({ theme }) => theme.colors.third};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.fontSizes.regular};
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

export const StyledImg = styled.img<ThemeProps>`
  width: 450px;
  animation: ${pulseAnimation} 3s ease-in-out infinite;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 350px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 260px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 230px;
  }
`;

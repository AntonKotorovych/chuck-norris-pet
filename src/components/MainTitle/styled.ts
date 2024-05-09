import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
  height: 350px;
  margin-bottom: 2rem;
`;

export const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledImg = styled.img`
  width: 450px;
  animation: ${pulseAnimation} 3s ease-in-out infinite;
`;

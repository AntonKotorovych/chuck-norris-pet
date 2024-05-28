import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.div<ThemeProps>`
  border: 16px solid ${({ theme }) => theme.spinnerBorderColor.primary};
  border-top: 16px solid ${({ theme }) => theme.spinnerBorderColor.secondary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

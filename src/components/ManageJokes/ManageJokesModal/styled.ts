import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledModalOverlay = styled.div<ThemeProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.modalOverlay.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.backgroundColorListModal.primary};
  padding: 20px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  max-width: 600px;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledList = styled.ul<ThemeProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 0 0.7rem;
  height: 67%;
  overflow: auto;
`;

export const StyledText = styled.label<ThemeProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

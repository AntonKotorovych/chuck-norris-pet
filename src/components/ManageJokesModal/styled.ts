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

export const StyledModalContent = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.backgroundColorListModal.primary};
  padding: 20px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  max-width: 600px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledHeader = styled.header<ThemeProps>`
  height: 20%;
  border-bottom: 5px ${({ theme }) => theme.borderColor.primary} solid;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  justify-content: space-between;
`;

export const StyledList = styled.ul<ThemeProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 0 0.7rem;
  height: 67%;
  overflow: auto;
`;

export const StyledListItem = styled.li<ThemeProps>`
  list-style: none;
  color: ${({ theme }) => theme.colors.third};
  border: 3px ${({ theme }) => theme.borderColor.primary} solid;
  margin: 1rem 0;
  padding: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColorListItem.primary};
  align-items: center;
  transition: box-shadow 0.1s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowStyle.secondary};
    cursor: pointer;
  }
`;

export const StyledCheckbox = styled.input`
  height: 1.5rem;
  min-width: 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;

export const StyledText = styled.span<ThemeProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /*  */
`;

export const StyledFooter = styled.footer<ThemeProps>`
  display: flex;
  justify-content: flex-end;
  border-top: 5px ${({ theme }) => theme.borderColor.primary} solid;
  height: 10%;
`;

export const StyledWrapper = styled.div`
  width: 20%;
  height: 100%;
`;

export const StyledCloseWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 2rem;
`;

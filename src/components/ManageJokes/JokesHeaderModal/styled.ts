import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledHeader = styled.header<ThemeProps>`
  height: 30%;
  border-bottom: 5px ${({ theme }) => theme.borderColor.primary} solid;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const StyledCloseWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 2.5rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

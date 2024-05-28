import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledErrorContainer = styled.div<ThemeProps>`
  color: ${({ theme }) => theme.errorColor.primary};
  border: 3px ${({ theme }) => theme.borderColor.secondary} solid;
  background-color: ${({ theme }) => theme.errorBackgroundColor.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

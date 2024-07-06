import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledHeader = styled.header<ThemeProps>`
  height: 20%;
  border-bottom: 5px ${({ theme }) => theme.borderColor.primary} solid;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  justify-content: space-between;
`;

export const StyledCloseWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 3rem;
`;

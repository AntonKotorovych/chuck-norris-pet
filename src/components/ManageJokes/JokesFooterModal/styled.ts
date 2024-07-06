import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

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

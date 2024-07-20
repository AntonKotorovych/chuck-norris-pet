import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledFooter = styled.footer<ThemeProps>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const StyledWrapper = styled.div`
  width: 20%;
  height: 2.5rem;
`;

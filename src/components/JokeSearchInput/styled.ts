import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledContainer = styled.div<ThemeProps>`
  height: 60%;
  width: 15%;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const StyledNotification = styled.span<ThemeProps>`
  color: ${({ theme }) => theme.errorColor.secondary};
  font-weight: bold;
  position: absolute;
  top: -25px;
`;

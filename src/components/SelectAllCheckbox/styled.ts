import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledText = styled.span<ThemeProps>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
`;
export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

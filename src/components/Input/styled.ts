import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledInput = styled.input<ThemeProps>`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  border: none;
  padding: 0 3.5rem;
`;

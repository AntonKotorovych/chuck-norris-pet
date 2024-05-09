import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledTheme } from 'styled/theme';

const StyledInput = styled.input<{ theme: StyledTheme }>`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  border: none;
  padding: 0 3.5rem;
`;

export default withTheme(StyledInput);

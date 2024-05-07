import { css } from '@emotion/react';
import { StyledTheme } from './theme';

export const globalStyles = (theme: StyledTheme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.medium};
    background-color: ${theme.backgroundColors.primary};
  }
`;

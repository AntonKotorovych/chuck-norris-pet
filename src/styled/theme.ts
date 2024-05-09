export const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#161616',
  },
  backgroundColor: {
    primary: 'linear-gradient(to right, #131313, #636363, #131313);',
  },
  btnBackgroundColor: {
    primary: '#161616',
    secondary: '#ffffff',
  },
  shadowStyle: {
    primary: '0 0 25px rgba(140, 140, 140, 0.877)',
  },
  fontSizes: {
    small: '1.3rem',
    medium: '2rem',
    big: '3rem',
  },
};

export type StyledTheme = typeof theme;

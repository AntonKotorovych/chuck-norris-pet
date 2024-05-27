export const theme = {
  fontFamily: {
    primary: '"Roboto", sans-serif',
    secondary: '"Poetsen One", sans-serif',
  },
  colors: {
    primary: '#ffffff',
    secondary: '#161616',
    third: '#ff8f33',
  },
  backgroundColor: {
    primary: 'linear-gradient(to right, #131313, #636363, #131313);',
  },
  backgroundColorListItem: {
    primary: '#19191989',
  },
  backgroundColorListValue: {
    primary: '#00000075',
  },
  borderColor: {
    primary: '#0f0f0f',
  },
  borderRadius: {
    sm: '20px',
    lg: '50px',
  },
  btnBackgroundColor: {
    primary: '#161616',
    secondary: '#ffffff',
    third: '#8a5a00',
  },
  filterPanelBackgroundColor: {
    primary: '#414141ff',
  },
  optionBackgroundColor: {
    primary: 'gray',
  },
  shadowStyle: {
    primary: '0 0 25px rgba(140, 140, 140, 0.877)',
    secondary: '0 0 25px rgba(0, 0, 0, 0.877)',
  },
  fontSizes: {
    tiny: '0.9rem',
    small: '1.3rem',
    medium: '2rem',
    big: '3rem',
  },
} as const;

export type StyledTheme = typeof theme;

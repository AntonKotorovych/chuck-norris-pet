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
  errorColor: {
    primary: '#fd1f1f',
    secondary: '#ff9a64',
  },
  errorBackgroundColor: {
    primary: '#030303',
  },
  spinnerBorderColor: {
    primary: '#f3f3f3',
    secondary: '#3498db',
  },
  textTransform: {
    primary: 'capitalize',
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
  backgroundColorListModal: {
    primary: '#464646',
  },
  borderColor: {
    primary: '#0f0f0f',
    secondary: '#909090',
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
    small: '1.1rem',
    medium: '2rem',
    big: '3rem',
  },
  modalOverlay: {
    primary: 'rgba(0, 0, 0, 0.6)',
  },
} as const;

export type StyledTheme = typeof theme;

import { StyledTheme } from 'styled/theme';

export interface ThemeProps {
  theme?: StyledTheme;
}

interface Option {
  value: string;
  label: string;
}

export interface CategorySelectProps {
  options: Option[];
  placeholder: string;
}

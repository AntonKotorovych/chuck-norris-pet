import { StyledTheme } from 'styled/theme';

export interface ThemeProps {
  theme?: StyledTheme;
}

interface Joke {
  categories: string[];
  createdAt: string;
  iconUrl: string;
  id: string;
  updatedAt: string;
  url: string;
  value: string;
}

export interface JokesList {
  response: null | Joke[];
  isLoading: boolean;
  error: Error | null;
}

export interface Option {
  value: string;
  label: string;
}

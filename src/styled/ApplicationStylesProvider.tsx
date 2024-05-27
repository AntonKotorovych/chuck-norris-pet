import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import { globalStyles } from 'styled/globalStyles';
import { theme } from 'styled/theme';

interface Props {
  children: ReactNode;
}

export default function ApplicationStylesProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={() => globalStyles(theme)}></Global>
      {children}
    </ThemeProvider>
  );
}

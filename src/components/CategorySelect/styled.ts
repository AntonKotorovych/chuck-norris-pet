import { CSSObject } from '@emotion/react';

import { OptionProps } from 'react-select';

import { StyledTheme } from 'styled/theme';

export const customSelectStyles = (theme: StyledTheme) => ({
  container: (baseStyles: CSSObject) => ({
    ...baseStyles,
    height: '100%',
  }),

  control: (baseStyles: CSSObject) => ({
    ...baseStyles,
    borderRadius: theme.borderRadius.sm,
    height: '100%',
    '&:hover': {
      boxShadow: theme.shadowStyle.secondary,
    },
  }),

  valueContainer: (baseStyles: CSSObject) => ({
    ...baseStyles,
    padding: '0 1rem',
  }),

  menu: (baseStyles: CSSObject) => ({
    ...baseStyles,
    backgroundColor: theme.btnBackgroundColor.primary,
  }),

  option: (baseStyles: CSSObject, option: OptionProps) => ({
    ...baseStyles,
    backgroundColor: option.isFocused
      ? theme.optionBackgroundColor.primary
      : theme.btnBackgroundColor.primary,
    '&:hover': {
      backgroundColor: theme.optionBackgroundColor.primary,
    },
  }),
});

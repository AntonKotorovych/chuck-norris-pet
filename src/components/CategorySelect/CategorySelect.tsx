import Select from 'react-select';

import { useTheme } from '@emotion/react';

import { StyledTheme } from 'styled/theme';

import { customSelectStyles } from './styled';

interface Props {
  options: { value: string; label: string }[];
  placeholder: string;
}

export default function CategorySelect(props: Props) {
  const theme = useTheme();

  const styles = customSelectStyles(theme as StyledTheme);

  return <Select styles={styles} {...props} />;
}

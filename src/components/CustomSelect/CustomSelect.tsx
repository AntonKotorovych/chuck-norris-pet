import { useMemo } from 'react';
import Select from 'react-select';
import { useTheme } from '@emotion/react';
import { StyledTheme } from 'styled/theme';
import { CategorySelectProps } from 'types/interfaces/CommonInterfaces';
import { customSelectStyles } from './styled';

export default function CustomSelect(props: CategorySelectProps) {
  const theme = useTheme();

  const styles = useMemo(
    () => customSelectStyles(theme as StyledTheme),
    [theme]
  );

  return <Select styles={styles} {...props} />;
}

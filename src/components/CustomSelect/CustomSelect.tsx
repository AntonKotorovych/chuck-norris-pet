import { useMemo } from 'react';
import Select, { Props as SelectProps } from 'react-select';
import { useTheme } from '@emotion/react';
import { StyledTheme } from 'styled/theme';
import { Option } from 'types/interfaces/CommonInterfaces';
import { customSelectStyles } from './styled';

export interface Props extends SelectProps {
  options: Option[] | [];
}

export default function CustomSelect(props: Props) {
  const theme = useTheme();

  const styles = useMemo(
    () => customSelectStyles(theme as StyledTheme),
    [theme]
  );

  return <Select styles={styles} {...props} />;
}

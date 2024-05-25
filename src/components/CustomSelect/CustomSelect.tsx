import { useMemo } from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';
import { useTheme } from '@emotion/react';
import { StyledTheme } from 'styled/theme';
import { CategorySelectProps } from 'components/CategorySelect/CategorySelect';
import { customSelectStyles } from './styled';

type CustomSelectProps = CategorySelectProps & ReactSelectProps;

export default function CustomSelect(props: CustomSelectProps) {
  const theme = useTheme();

  const styles = useMemo(
    () => customSelectStyles(theme as StyledTheme),
    [theme]
  );

  return <Select styles={styles} {...props} />;
}

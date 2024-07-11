import { ChangeEvent, forwardRef } from 'react';
import { StyledCheckbox } from './styled';

interface Props {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ id, checked, onChange }, ref) => (
    <StyledCheckbox
      type="checkbox"
      id={id}
      ref={ref}
      checked={checked}
      onChange={onChange}
    />
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

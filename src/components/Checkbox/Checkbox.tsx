import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledCheckbox } from './styled';

const Checkbox = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
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

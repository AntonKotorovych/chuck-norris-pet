import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { StyledCheckbox } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isPartiallySelected?: boolean;
}

const Checkbox: React.FC<Props> = ({ isPartiallySelected, ...props }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current && typeof isPartiallySelected === 'boolean') {
      ref.current.indeterminate = isPartiallySelected;
    }
  }, [isPartiallySelected]);

  return <StyledCheckbox {...props} type="checkbox" ref={ref} />;
};

export default Checkbox;

import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styled';
import { StyledInputContainer, StyledSVGButton, SvgPosition } from './styled';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  rightIcon?: string;
  onClear?: VoidFunction;
  onSearch?: VoidFunction;
}

export default function Input({
  onClear,
  onSearch,
  leftIcon,
  rightIcon,
  ...rest
}: Props) {
  return (
    <StyledInputContainer>
      {leftIcon && (
        <StyledSVGButton
          type="button"
          position={SvgPosition.LEFT}
          onClick={onSearch}
        >
          <img src={leftIcon} alt="" />
        </StyledSVGButton>
      )}
      <StyledInput {...rest} />
      {rightIcon && (
        <StyledSVGButton
          type="button"
          position={SvgPosition.RIGHT}
          onClick={onClear}
        >
          <img src={rightIcon} alt="" />
        </StyledSVGButton>
      )}
    </StyledInputContainer>
  );
}

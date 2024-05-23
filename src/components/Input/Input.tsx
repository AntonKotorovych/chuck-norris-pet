import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styled';
import { StyledInputContainer, StyledSVGButton, SvgPosition } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  rightIcon?: string;
  onClear?: VoidFunction;
}

export default function Input({
  onClear,
  leftIcon,
  rightIcon,
  ...rest
}: Props) {
  const onClick = () => onClear && onClear();

  return (
    <StyledInputContainer>
      {leftIcon && (
        <StyledSVGButton type="button" position={SvgPosition.LEFT}>
          <img src={leftIcon} alt="" />
        </StyledSVGButton>
      )}
      <StyledInput {...rest} />
      {rightIcon && (
        <StyledSVGButton
          type="button"
          position={SvgPosition.RIGHT}
          onClick={onClick}>
          <img src={rightIcon} alt="" />
        </StyledSVGButton>
      )}
    </StyledInputContainer>
  );
}
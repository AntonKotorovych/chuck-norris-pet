import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { StyledButton } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'secondary';
}

export default function Button({
  children,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton type="button" {...props} variant={variant}>
      {children}
    </StyledButton>
  );
}

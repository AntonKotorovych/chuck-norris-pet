import { PropsWithChildren } from 'react';
import StyledButton from './styled';

export default function Button({ children }: PropsWithChildren) {
  return <StyledButton>{children}</StyledButton>;
}

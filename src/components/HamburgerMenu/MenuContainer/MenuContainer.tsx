import MobileFilterPanel from 'components/MobileFilterPanel';
import { StyledMenuContainer } from './styled';

interface Props {
  isOpen: boolean;
}

export default function MenuContainer({ isOpen }: Props) {
  return (
    <StyledMenuContainer isOpen={isOpen}>
      <MobileFilterPanel />
    </StyledMenuContainer>
  );
}

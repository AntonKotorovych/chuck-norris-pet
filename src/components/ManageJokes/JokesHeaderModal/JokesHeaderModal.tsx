import Button from 'components/Button';
import { StyledText } from '../ManageJokesModal/styled';
import { StyledCloseWrapper, StyledHeader } from './styled';

interface Props {
  onClose: VoidFunction;
}

export default function JokesHeaderModal({ onClose }: Props) {
  const handleClick = () => onClose();

  return (
    <StyledHeader>
      <StyledText>Manage favorite jokes</StyledText>
      <StyledCloseWrapper>
        <Button variant="secondary" onClick={handleClick}>
          ✖
        </Button>
      </StyledCloseWrapper>
    </StyledHeader>
  );
}

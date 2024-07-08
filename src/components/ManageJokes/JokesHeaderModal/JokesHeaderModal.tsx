import Button from 'components/Button';
import SelectAllCheckbox from 'components/SelectAllCheckbox';
import { StyledText } from '../ManageJokesModal/styled';
import { StyledCloseWrapper, StyledContainer, StyledHeader } from './styled';

interface Props {
  onClose: VoidFunction;
}

export default function JokesHeaderModal({ onClose }: Props) {
  const handleClick = () => onClose();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledText>Manage favorite jokes</StyledText>
        <StyledCloseWrapper>
          <Button variant="secondary" onClick={handleClick}>
            ✖
          </Button>
        </StyledCloseWrapper>
      </StyledContainer>
      <StyledContainer>
        <SelectAllCheckbox />
      </StyledContainer>
    </StyledHeader>
  );
}

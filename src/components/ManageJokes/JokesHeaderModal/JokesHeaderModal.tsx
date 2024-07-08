import Button from 'components/Button';
import SelectAllCheckbox from 'components/SelectAllCheckbox';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { StyledText } from '../ManageJokesModal/styled';
import { StyledCloseWrapper, StyledContainer, StyledHeader } from './styled';

interface Props {
  jokesList: Joke[];
  onClose: VoidFunction;
}

export default function JokesHeaderModal({ onClose, jokesList }: Props) {
  const handleClick = () => onClose();

  return (
    <StyledHeader isSelectAll={jokesList.length > 0}>
      <StyledContainer>
        <StyledText>Manage favorite jokes</StyledText>
        <StyledCloseWrapper>
          <Button variant="secondary" onClick={handleClick}>
            ✖
          </Button>
        </StyledCloseWrapper>
      </StyledContainer>
      {jokesList.length > 0 && (
        <StyledContainer>
          <SelectAllCheckbox jokesList={jokesList} />
        </StyledContainer>
      )}
    </StyledHeader>
  );
}

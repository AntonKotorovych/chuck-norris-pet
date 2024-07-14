import SelectAllCheckbox from 'components/SelectAllCheckbox';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { StyledContainer, StyledText, StyledWrapper } from './styled';

interface Props {
  jokesList: Joke[];
}

export default function JokesHeaderModal({ jokesList }: Props) {
  return (
    <StyledWrapper hasJokes={jokesList.length > 0}>
      <StyledContainer>
        <StyledText>Manage favorite jokes</StyledText>
      </StyledContainer>
      {Boolean(jokesList.length) && (
        <StyledContainer>
          <SelectAllCheckbox jokesList={jokesList} />
        </StyledContainer>
      )}
    </StyledWrapper>
  );
}

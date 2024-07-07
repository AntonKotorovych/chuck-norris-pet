import { Joke } from 'types/interfaces/CommonInterfaces';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { StyledText } from '../ManageJokesModal/styled';
import { StyledCheckbox, StyledListItem } from './styled';

interface Props {
  joke: Joke;
}

export default function JokeItemModal({ joke }: Props) {
  const isChosenJoke = useFavoriteJokesStore(state => state.isChosenJoke(joke.id));
  const toggleSelectedJoke = useFavoriteJokesStore(
    state => state.toggleSelectedJoke
  );

  const handleItemClick = () => toggleSelectedJoke(joke);

  return (
    <StyledListItem key={joke.id} title={joke.value} onClick={handleItemClick}>
      <StyledCheckbox
        type="checkbox"
        id={joke.id}
        checked={isChosenJoke}
        onChange={handleItemClick}
      />
      <StyledText htmlFor={joke.id}>{joke.value}</StyledText>
    </StyledListItem>
  );
}

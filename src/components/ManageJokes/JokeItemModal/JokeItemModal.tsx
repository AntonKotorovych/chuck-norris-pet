import { Joke } from 'types/interfaces/CommonInterfaces';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import Checkbox from 'components/Checkbox';
import { StyledLabel, StyledListItem, StyledText } from './styled';

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
    <StyledLabel htmlFor={joke.id}>
      <StyledListItem title={joke.value}>
        <Checkbox id={joke.id} checked={isChosenJoke} onChange={handleItemClick} />
        <StyledText>{joke.value}</StyledText>
      </StyledListItem>
    </StyledLabel>
  );
}

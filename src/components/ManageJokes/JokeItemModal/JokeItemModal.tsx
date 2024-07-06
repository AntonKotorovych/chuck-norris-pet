import { Joke } from 'types/interfaces/CommonInterfaces';
import { StyledText } from '../ManageJokesModal/styled';
import { StyledCheckbox, StyledListItem } from './styled';

interface Props {
  joke: Joke;
}

export default function JokeItemModal({ joke }: Props) {
  return (
    <StyledListItem key={joke.id} title={joke.value}>
      <StyledCheckbox type="checkbox" id={joke.id} />
      <StyledText htmlFor={joke.id}>{joke.value}</StyledText>
    </StyledListItem>
  );
}

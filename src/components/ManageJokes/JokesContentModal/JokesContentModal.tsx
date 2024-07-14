import { Joke } from 'types/interfaces/CommonInterfaces';
import JokeItemModal from '../JokeItemModal';
import { StyledList, StyledNoJokesContainer, StyledText } from './styled';

interface Props {
  jokesList: Joke[];
}

export default function JokesContentModal({ jokesList }: Props) {
  return (
    <StyledList>
      {Boolean(jokesList.length) ? (
        jokesList.map(joke => <JokeItemModal key={joke.id} joke={joke} />)
      ) : (
        <StyledNoJokesContainer>
          <StyledText>No Jokes</StyledText>
        </StyledNoJokesContainer>
      )}
    </StyledList>
  );
}

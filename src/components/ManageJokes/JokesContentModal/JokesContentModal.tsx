import { Joke } from 'types/interfaces/CommonInterfaces';
import JokeItemModal from '../JokeItemModal';

interface Props {
  jokesList: Joke[];
}

export default function JokesContentModal({ jokesList }: Props) {
  return jokesList.map(joke => <JokeItemModal key={joke.id} joke={joke} />);
}

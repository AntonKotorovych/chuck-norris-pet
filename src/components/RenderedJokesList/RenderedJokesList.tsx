import JokeItem from 'components/JokesList/JokeItem';
import { Joke } from 'types/interfaces/CommonInterfaces';

interface Props {
  jokes: Joke[];
}

export default function RenderedJokesList({ jokes }: Props) {
  return jokes.map(joke => (
    <JokeItem
      key={joke.id}
      id={joke.id}
      categories={joke.categories}
      value={joke.value}
      url={joke.url}
      createdAt={joke.createdAt}
    />
  ));
}

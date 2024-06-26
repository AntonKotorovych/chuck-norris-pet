import { useLoaderData } from 'react-router-dom';
import { Joke } from 'types/interfaces/CommonInterfaces';
import Error from 'components/Error';
import JokeItem from '../JokeItem';
import { StyledList, StyledSection } from '../styled';

export default function SingleJoke() {
  const joke = useLoaderData() as Joke;

  return (
    <StyledSection>
      <StyledList>
        {joke ? (
          <JokeItem
            categories={joke.categories}
            value={joke.value}
            url={joke.url}
            createdAt={joke.createdAt}
            id={joke.id}
          />
        ) : (
          <Error
            title={'Something went wrong'}
            message={`Failed to load joke from server`}
          />
        )}
      </StyledList>
    </StyledSection>
  );
}

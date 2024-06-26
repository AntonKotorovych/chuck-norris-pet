import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useJoke } from 'hooks/useJoke';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import JokeItem from '../JokeItem';
import { StyledList, StyledSection } from '../styled';

export default function SingleJoke() {
  const { jokeId } = useParams();

  const {
    jokeState: { joke, isLoading, error },
    fetchSingleJoke,
  } = useJoke();

  useEffect(() => {
    if (jokeId) fetchSingleJoke(jokeId);
  }, [fetchSingleJoke, jokeId]);

  return (
    <StyledSection>
      <StyledList>
        {error && <Error title={error.name} message={error.message} />}
        {isLoading && <Spinner />}
        {joke && (
          <JokeItem
            categories={joke.categories}
            value={joke.value}
            url={joke.url}
            createdAt={joke.createdAt}
            id={joke.id}
          />
        )}
      </StyledList>
    </StyledSection>
  );
}

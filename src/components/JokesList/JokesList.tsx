import { useEffect, useState } from 'react';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import JokeItem from './JokeItem';
import {
  StyledList,
  StyledSection,
  StyledButtonContainer,
  StyledNoJokesContainer,
} from './styled';

const JOKES_ON_PAGE_COUNT = 10;

export default function JokesList() {
  const { response, isLoading, error } = useJokesList();
  const [jokesList, setJokesList] = useState<Joke[] | null>(null);
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);

  let showLoadMore = false;

  if (response && jokesList) showLoadMore = response.length > jokesList.length;

  const handleLoadMore = () => {
    if (response) {
      const newDisplayCount = displayCount + JOKES_ON_PAGE_COUNT;
      const moreJokes = response.slice(0, newDisplayCount);
      setJokesList(moreJokes);
      setDisplayCount(newDisplayCount);
    }
  };

  useEffect(() => {
    if (response) {
      if (response.length <= JOKES_ON_PAGE_COUNT) {
        setJokesList(response);
      } else {
        const firstTenJokes: Joke[] = response.slice(0, JOKES_ON_PAGE_COUNT);
        setJokesList(firstTenJokes);
        setDisplayCount(JOKES_ON_PAGE_COUNT);
      }
    }
  }, [response]);

  return (
    <StyledSection>
      {isLoading && <Spinner />}
      <StyledList>
        {error && <Error title={error.name} message={error.message} />}
        {jokesList?.length === 0 && (
          <StyledNoJokesContainer>
            There is no jokes by this query ;)
          </StyledNoJokesContainer>
        )}
        {jokesList?.map(joke => {
          return (
            <JokeItem
              key={joke.id}
              categories={joke.categories}
              value={joke.value}
              url={joke.url}
              created={joke.createdAt}
            />
          );
        })}
      </StyledList>
      <StyledButtonContainer>
        {showLoadMore && (
          <Button variant="main" onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </StyledButtonContainer>
    </StyledSection>
  );
}

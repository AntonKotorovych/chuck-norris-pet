import { useMemo, useState } from 'react';
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
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);

  const jokesList = useMemo(() => {
    if (response) {
      if (response.length <= displayCount) {
        return response;
      }

      return response.slice(0, displayCount);
    }

    return [];
  }, [response, displayCount]);

  const showLoadMore = useMemo(() => {
    if (response && jokesList) {
      return response.length > jokesList.length;
    }
    return false;
  }, [response, jokesList]);

  const handleLoadMore = () => {
    if (response) {
      const newDisplayCount = displayCount + JOKES_ON_PAGE_COUNT;
      setDisplayCount(newDisplayCount);
    }
  };

  return (
    <StyledSection>
      {isLoading && <Spinner />}
      <StyledList>
        {error && <Error title={error.name} message={error.message} />}
        {jokesList?.length === 0 && !isLoading ? (
          <StyledNoJokesContainer>
            There is no jokes by this query ;)
          </StyledNoJokesContainer>
        ) : null}
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

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

export default function JokesList() {
  const { isLoading, error, loadMoreAPI } = useJokesList();

  const { loadMore, jokeList, isLoadMoreAllowed } = loadMoreAPI;

  return (
    <StyledSection>
      {isLoading && <Spinner />}
      <StyledList>
        {error && <Error title={error.name} message={error.message} />}
        {jokeList.length === 0 && !isLoading ? (
          <StyledNoJokesContainer>
            There is no jokes by this query ;)
          </StyledNoJokesContainer>
        ) : null}
        {jokeList.map(joke => {
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
        {isLoadMoreAllowed && (
          <Button variant="main" onClick={loadMore}>
            Load More
          </Button>
        )}
      </StyledButtonContainer>
    </StyledSection>
  );
}

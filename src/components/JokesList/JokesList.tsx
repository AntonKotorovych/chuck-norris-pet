import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import { renderJokes } from 'utils/renderJokes';
import {
  StyledList,
  StyledSection,
  StyledButtonContainer,
  StyledNoJokesContainer,
} from './styled';

export default function JokesList() {
  const { isLoading, error, loadMoreAPI } = useJokesList();

  const { loadMore, visibleJokes, isLoadMoreAllowed } = loadMoreAPI;

  return (
    <StyledSection>
      {isLoading && <Spinner />}
      <StyledList>
        {error && <Error title={error.name} message={error.message} />}
        {visibleJokes.length === 0 && !isLoading && !error ? (
          <StyledNoJokesContainer>
            There is no jokes by this query ;)
          </StyledNoJokesContainer>
        ) : null}
        {renderJokes(visibleJokes)}
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

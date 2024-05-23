import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import JokeItem from './JokeItem';
import { StyledList, StyledSection, StyledButtonContainer } from './styled';

export default function JokesList() {
  const { response, isLoading, error } = useJokesList();

  return (
    <StyledSection>
      <StyledList>
        {isLoading && <Spinner />}
        {error && <Error title={error.name} message={error.message} />}
        {response?.map(joke => (
          <JokeItem
            key={joke.id}
            categories={joke.categories}
            value={joke.value}
            url={joke.url}
            created={joke.created_at}
          />
        ))}
      </StyledList>
      <StyledButtonContainer>
        <Button variant="main">Load More</Button>
      </StyledButtonContainer>
    </StyledSection>
  );
}

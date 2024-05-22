import Button from 'components/Button';
import { jokesList } from 'mocks/jokesList';
import JokeItem from './JokeItem';

import { StyledList, StyledSection, StyledButtonContainer } from './styled';

export default function JokesList() {
  return (
    <StyledSection>
      <StyledList>
        {jokesList.map(joke => (
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

import Button from 'components/Button';
import { JOKES_LIST } from 'mocks/jokesList';
import JokeItem from './JokeItem';

import { StyledList, StyledSection, StyledButtonContainer } from './styled';

export default function JokesList() {
  return (
    <StyledSection>
      <StyledList>
        {JOKES_LIST.map(joke => (
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

import Button from 'components/Button';

import {
  StyledList,
  StyledListElement,
  StyledSection,
  StyledATag,
  StyledButtonDiv,
  StyledDiv,
  StyledSpan,
  StyledJokeSpan,
  StyledFooterDiv,
  StyledJokeCategoryDiv,
  StyledJokeDiv,
} from './styled';

const mockJokesList = [
  {
    id: 1,
    categories: ['Test Category 1'],
    created_at: '2020-01-05 13:42:25.352697',
    url: 'https://api.chucknorris.io/jokes/4tJkNVXPSUqvBn4bxl9D7w',
    value: "Chuck Norris' first name is The.",
  },
  {
    id: 2,
    categories: ['Test Category 2'],
    created_at: '2020-01-04 08:41:25.355234',
    url: 'https://api.chucknorris.io/jokes/zV2fzxDvRMyEdgSk2jTVKg',
    value: "Chuck Norris' sperm can kick your ass",
  },
  {
    id: 3,
    categories: ['Test Category 3'],
    created_at: '2021-01-08 10:25:26.255234',
    url: 'https://api.chucknorris.io/jokes/kDLgBCisQcO70ZWi30XOqg',
    value: 'Chuck Norris tells Scorpian to "get over Here"',
  },
  {
    id: 4,
    categories: ['Test Category 4'],
    created_at: '2021-01-10 10:22:26.215534',
    url: 'https://api.chucknorris.io/jokes/Kqck_igkQNCw6Y0ADR2iyA',
    value: 'The Terminator wears a Chuck Norris tee shirt. .',
  },
];

export default function JokesList() {
  return (
    <StyledSection>
      <StyledList>
        {mockJokesList.map(joke => (
          <StyledListElement key={joke.id}>
            <StyledDiv>
              <StyledJokeCategoryDiv>
                <StyledSpan>Joke category: {joke.categories[0]}</StyledSpan>
              </StyledJokeCategoryDiv>
              <StyledJokeDiv>
                <StyledJokeSpan>`` {joke.value}</StyledJokeSpan>
              </StyledJokeDiv>
              <StyledFooterDiv>
                <div>
                  <StyledATag href={joke.url} target="_blank">
                    <StyledSpan>Look original joke</StyledSpan>
                  </StyledATag>
                </div>
                <div>
                  <StyledSpan>
                    Created at:
                    {joke.created_at.substring(0, joke.created_at.indexOf('.'))}
                  </StyledSpan>
                </div>
              </StyledFooterDiv>
            </StyledDiv>
          </StyledListElement>
        ))}
      </StyledList>
      <StyledButtonDiv>
        <Button>Load More</Button>
      </StyledButtonDiv>
    </StyledSection>
  );
}

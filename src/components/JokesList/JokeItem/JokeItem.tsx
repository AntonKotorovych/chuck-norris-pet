import {
  StyledListElement,
  StyledJokeContainer,
  StyledATag,
  StyledJokeCategory,
  StyledSpan,
  StyledJokeDiv,
  StyledJokeSpan,
  StyledFooterDiv,
  StyledDiv,
} from './styled';

interface Props {
  categories: string[];
  value: string;
  url: string;
  created: string;
}

export default function JokeItem({ categories, value, url, created }: Props) {
  return (
    <StyledListElement>
      <StyledJokeContainer>
        <StyledJokeCategory>
          <StyledSpan>
            {categories.length === 0 ? (
              'No Categories'
            ) : (
              <>
                Joke category:{' '}
                {categories.map(category => (
                  <StyledATag
                    href={'https://google.com'}
                    target="_blank"
                    key={category}>
                    {category},{' '}
                  </StyledATag>
                ))}
              </>
            )}
          </StyledSpan>
        </StyledJokeCategory>
        <StyledJokeDiv>
          <StyledJokeSpan>`` {value}</StyledJokeSpan>
        </StyledJokeDiv>
        <StyledFooterDiv>
          <StyledDiv>
            <StyledATag href={url} target="_blank">
              <StyledSpan>Look original joke</StyledSpan>
            </StyledATag>
          </StyledDiv>
          <StyledDiv>
            <StyledSpan>
              Created at: {created.substring(0, created.indexOf('.'))}
            </StyledSpan>
          </StyledDiv>
        </StyledFooterDiv>
      </StyledJokeContainer>
    </StyledListElement>
  );
}

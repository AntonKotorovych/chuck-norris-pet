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
            {categories?.length ? (
              <>
                Joke category:{' '}
                {categories.map((category, index) => (
                  <StyledATag href={'#'} target="_blank" key={category}>
                    {category.toUpperCase()}
                    {index !== categories.length - 1 ? ', ' : ''}
                  </StyledATag>
                ))}
              </>
            ) : (
              'No Categories'
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

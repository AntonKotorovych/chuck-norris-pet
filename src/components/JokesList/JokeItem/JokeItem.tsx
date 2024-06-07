// import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import {
  StyledListElement,
  StyledJokeContainer,
  StyledJokeCategory,
  StyledATag,
  StyledSpan,
  StyledJokeDiv,
  StyledJokeSpan,
  StyledFooterDiv,
  StyledDiv,
  StyledCategoryBtnWrapper,
} from './styled';

interface Props {
  categories: string[];
  value: string;
  url: string;
  created: string;
}

export default function JokeItem({ categories, value, url, created }: Props) {
  // const { changeCategory } = useJokesList();

  return (
    <StyledListElement>
      <StyledJokeContainer>
        <StyledJokeCategory>
          {categories?.length ? (
            <>
              <StyledSpan>Joke category: </StyledSpan>
              {categories.map(category => (
                <StyledCategoryBtnWrapper key={category}>
                  <Button variant="secondary">{category}</Button>
                </StyledCategoryBtnWrapper>
              ))}
            </>
          ) : (
            <StyledSpan>No Categories</StyledSpan>
          )}
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

import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import FavoriteButton from 'components/FavoriteButton';

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
  StyledHeaderDiv,
} from './styled';

export interface JokeProps {
  categories: string[];
  value: string;
  url: string;
  createdAt: string;
  id: string;
}

export default function JokeItem({
  categories,
  value,
  url,
  createdAt,
  id,
}: JokeProps) {
  const { setCategory } = useFilters();

  const handleCategoryClick = (category: string) => setCategory(category);

  return (
    <StyledListElement>
      <StyledJokeContainer>
        <StyledHeaderDiv>
          <StyledJokeCategory>
            {categories?.length ? (
              <>
                <StyledSpan>Joke category: </StyledSpan>
                {categories.map(category => (
                  <StyledCategoryBtnWrapper key={category}>
                    <Button
                      variant="secondary"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Button>
                  </StyledCategoryBtnWrapper>
                ))}
              </>
            ) : (
              <StyledSpan>No Categories</StyledSpan>
            )}
          </StyledJokeCategory>
          <FavoriteButton joke={{ categories, value, url, createdAt, id }} />
        </StyledHeaderDiv>
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
              Created at: {createdAt.substring(0, createdAt.indexOf('.'))}
            </StyledSpan>
          </StyledDiv>
        </StyledFooterDiv>
      </StyledJokeContainer>
    </StyledListElement>
  );
}

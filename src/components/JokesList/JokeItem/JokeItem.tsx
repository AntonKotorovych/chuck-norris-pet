import { Link } from 'react-router-dom';
import Button from 'components/Button';
import FavoriteButton from 'components/FavoriteButton';
import { ROUTES } from 'constants/routes';

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
  StyledLink,
  StyledLinksContainer,
} from './styled';

export interface JokeProps {
  categories: string[];
  value: string;
  url: string;
  createdAt: string;
  id: string;
}

export default function JokeItem(props: JokeProps) {
  const { categories, value, url, createdAt, id } = props;

  const jokeDetailPath = ROUTES.JOKE(id);

  return (
    <StyledListElement>
      <StyledJokeContainer>
        <StyledHeaderDiv>
          <StyledJokeCategory>
            {categories?.length ? (
              <>
                <StyledSpan>Joke category: </StyledSpan>
                {categories.map(category => (
                  <Link key={category} to={`${ROUTES.HOME}?category=${category}`}>
                    <StyledCategoryBtnWrapper>
                      <Button variant="secondary">{category}</Button>
                    </StyledCategoryBtnWrapper>
                  </Link>
                ))}
              </>
            ) : (
              <StyledSpan>No Categories</StyledSpan>
            )}
          </StyledJokeCategory>
          <FavoriteButton joke={props} />
        </StyledHeaderDiv>
        <StyledJokeDiv>
          <StyledJokeSpan>`` {value}</StyledJokeSpan>
        </StyledJokeDiv>
        <StyledFooterDiv>
          <StyledLinksContainer>
            <StyledATag href={url} target="_blank">
              <StyledSpan>Look original joke</StyledSpan>
            </StyledATag>
            {location.pathname !== jokeDetailPath && (
              <StyledLink to={jokeDetailPath}>
                <StyledSpan>Read joke</StyledSpan>
              </StyledLink>
            )}
          </StyledLinksContainer>
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

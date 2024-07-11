import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import RenderedJokesList from 'components/RenderedJokesList';
import { StyledList, StyledNoJokesContainer, StyledSection } from '../styled';

export default function FavoriteJokesList() {
  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);

  return (
    <StyledSection>
      <StyledList>
        {favoriteJokes.length ? (
          <RenderedJokesList jokes={favoriteJokes} />
        ) : (
          <StyledNoJokesContainer>There is no favorite jokes</StyledNoJokesContainer>
        )}
      </StyledList>
    </StyledSection>
  );
}

import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import RenderedJokesList from 'components/RenderedJokesList';
import { StyledList, StyledNoJokesContainer, StyledSection } from '../styled';

export default function FavoriteJokesList() {
  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);

  return (
    <StyledSection>
      <StyledList>
        {Boolean(!favoriteJokes.length) && (
          <StyledNoJokesContainer>There is no favorite jokes</StyledNoJokesContainer>
        )}
        <RenderedJokesList jokes={favoriteJokes} />
      </StyledList>
    </StyledSection>
  );
}

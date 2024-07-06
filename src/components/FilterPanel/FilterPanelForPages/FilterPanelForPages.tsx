import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import ManageJokes from 'components/ManageJokes';
import { StyledContainer, StyledSection } from '../styled';

export default function FilterPanelForPages() {
  const location = useLocation();

  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);

  return (
    <StyledSection>
      <StyledContainer>
        <Link to={ROUTES.HOME}>
          <Button variant="main">Back to Homepage</Button>
        </Link>
      </StyledContainer>
      <StyledContainer>
        {location.pathname === ROUTES.FAVORITE_JOKES ? (
          <ManageJokes jokesList={favoriteJokes} buttonText={'Manage Jokes'} />
        ) : (
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary">Favorite Jokes</Button>
          </Link>
        )}
      </StyledContainer>
    </StyledSection>
  );
}

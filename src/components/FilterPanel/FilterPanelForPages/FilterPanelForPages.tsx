import { lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import Spinner from 'components/Spinner';
import { useHamburgerMenu } from 'hooks/useHamburgerMenu';
import { StyledSection } from '../styled';
import { StyledContainer } from './styled';

const ManageJokes = lazy(() => import('components/ManageJokes'));

export default function FilterPanelForPages() {
  const location = useLocation();
  const { closeMenu } = useHamburgerMenu();

  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);

  return (
    <StyledSection>
      <StyledContainer>
        <Link to={ROUTES.HOME}>
          <Button onClick={closeMenu}>Back to Homepage</Button>
        </Link>
      </StyledContainer>
      <StyledContainer>
        {location.pathname === ROUTES.FAVORITE_JOKES ? (
          <Suspense fallback={<Spinner />}>
            <ManageJokes jokesList={favoriteJokes} buttonText="Manage Jokes" />
          </Suspense>
        ) : (
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary" onClick={closeMenu}>
              Favorite Jokes
            </Button>
          </Link>
        )}
      </StyledContainer>
    </StyledSection>
  );
}

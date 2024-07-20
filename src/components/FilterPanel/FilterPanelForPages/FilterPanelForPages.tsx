import { lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import Spinner from 'components/Spinner';
import { StyledContainer, StyledSection } from '../styled';

interface Props {
  setIsOpenMenu?: (isOpen: boolean) => void;
}

const ManageJokes = lazy(() => import('components/ManageJokes'));

export default function FilterPanelForPages({ setIsOpenMenu }: Props) {
  const location = useLocation();

  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);

  const handleCloseMenu = () => {
    if (setIsOpenMenu) setIsOpenMenu(false);
  };

  return (
    <StyledSection>
      <StyledContainer>
        <Link to={ROUTES.HOME}>
          <Button onClick={handleCloseMenu}>Back to Homepage</Button>
        </Link>
      </StyledContainer>
      <StyledContainer>
        {location.pathname === ROUTES.FAVORITE_JOKES ? (
          <Suspense fallback={<Spinner />}>
            <ManageJokes
              jokesList={favoriteJokes}
              buttonText="Manage Jokes"
              setIsOpenMenu={setIsOpenMenu}
            />
          </Suspense>
        ) : (
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary" onClick={handleCloseMenu}>
              Favorite Jokes
            </Button>
          </Link>
        )}
      </StyledContainer>
    </StyledSection>
  );
}

import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import ManageJokesModal from 'components/ManageJokesModal';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { useModal } from 'hooks/useModal';
import { StyledContainer, StyledSection } from '../styled';

export default function FilterPanelForPages() {
  const { isShowModal, handleOpenModal, handleCloseModal } = useModal();

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
        {location.pathname !== ROUTES.FAVORITE_JOKES ? (
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary">Favorite Jokes</Button>
          </Link>
        ) : (
          <Button variant="secondary" onClick={handleOpenModal}>
            Manage Jokes
          </Button>
        )}
      </StyledContainer>
      <ManageJokesModal
        jokesList={favoriteJokes}
        show={isShowModal}
        onClose={handleCloseModal}
      />
    </StyledSection>
  );
}

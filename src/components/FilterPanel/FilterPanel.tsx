import { Link } from 'react-router-dom';
import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { ROUTES } from 'constants/routes';
import { useModal } from 'hooks/useModal';
import ManageJokesModal from 'components/ManageJokesModal';
import { useJokesList } from 'store/JokesListProvider';
import { StyledContainer, StyledSection, VerticalLineSeparator } from './styled';

export default function FilterPanel() {
  const { isShowModal, handleOpenModal, handleCloseModal } = useModal();
  const {
    loadMoreAPI: { visibleJokes },
  } = useJokesList();

  const { clearAllFilters } = useFilters();

  const handleOnClear = () => clearAllFilters();

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect />
      </StyledContainer>
      <JokeSearchInput />
      <StyledContainer>
        <Button variant="secondary" onClick={handleOnClear}>
          Clear Filtering
        </Button>
      </StyledContainer>
      <VerticalLineSeparator />
      <StyledContainer>
        <Button variant="main" onClick={handleOpenModal}>
          Add Favorite Jokes
        </Button>
      </StyledContainer>
      <StyledContainer>
        <Link to={ROUTES.FAVORITE_JOKES}>
          <Button variant="secondary">Favorite Jokes</Button>
        </Link>
      </StyledContainer>
      <ManageJokesModal
        jokesList={visibleJokes}
        show={isShowModal}
        onClose={handleCloseModal}
      />
    </StyledSection>
  );
}

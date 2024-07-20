import { Link } from 'react-router-dom';
import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { ROUTES } from 'constants/routes';
import { useJokesList } from 'store/JokesListProvider';
import ManageJokes from 'components/ManageJokes';
import {
  StyledContainer,
  StyledFilterPanel,
  StyledSection,
  VerticalLineSeparator,
} from './styled';

export default function FilterPanel() {
  const {
    loadMoreAPI: { visibleJokes },
  } = useJokesList();

  const { clearAllFilters } = useFilters();

  const handleOnClear = () => clearAllFilters();

  return (
    <StyledFilterPanel>
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
          <ManageJokes jokesList={visibleJokes} buttonText="Add Favorite Jokes" />
        </StyledContainer>
        <StyledContainer>
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary">Favorite Jokes</Button>
          </Link>
        </StyledContainer>
      </StyledSection>
    </StyledFilterPanel>
  );
}

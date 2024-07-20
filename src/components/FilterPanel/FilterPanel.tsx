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

interface Props {
  setIsOpenMenu?: (isOpen: boolean) => void;
}

export default function FilterPanel({ setIsOpenMenu }: Props) {
  const {
    loadMoreAPI: { visibleJokes },
  } = useJokesList();

  const { clearAllFilters } = useFilters();

  const handleOnClear = () => {
    if (setIsOpenMenu) setIsOpenMenu(false);
    clearAllFilters();
  };

  const handleClick = () => {
    if (setIsOpenMenu) setIsOpenMenu(false);
  };

  return (
    <StyledFilterPanel>
      <StyledSection>
        <StyledContainer>
          <CategorySelect />
        </StyledContainer>
        <JokeSearchInput setIsOpenMenu={setIsOpenMenu} />
        <StyledContainer>
          <Button variant="secondary" onClick={handleOnClear}>
            Clear Filtering
          </Button>
        </StyledContainer>
        <VerticalLineSeparator />
        <StyledContainer>
          <ManageJokes
            jokesList={visibleJokes}
            buttonText="Add Favorite Jokes"
            setIsOpenMenu={setIsOpenMenu}
          />
        </StyledContainer>
        <StyledContainer>
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary" onClick={handleClick}>
              Favorite Jokes
            </Button>
          </Link>
        </StyledContainer>
      </StyledSection>
    </StyledFilterPanel>
  );
}

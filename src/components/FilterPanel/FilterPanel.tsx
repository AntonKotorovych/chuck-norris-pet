import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { QueryType } from 'types/enums/queryTypes';
import { StyledContainer, StyledSection } from './styled';

export default function FilterPanel() {
  const { fetchJokes, categoryList } = useJokesList();

  const handleOnClear = () => fetchJokes(QueryType.RANDOM_JOKE, '');

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect
          options={categoryList}
          placeholder="Category Selector"
        />
      </StyledContainer>
      <JokeSearchInput />
      <StyledContainer>
        <Button variant="secondary" onClick={handleOnClear}>
          Clear Filtering
        </Button>
      </StyledContainer>
    </StyledSection>
  );
}

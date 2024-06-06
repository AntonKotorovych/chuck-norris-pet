import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { QueryType } from 'types/enums/queryTypes';
import { StyledContainer, StyledSection } from './styled';

const options = [
  { value: 'Test category 1', label: 'Test category 1' },
  { value: 'Test category 2', label: 'Test category 2' },
  { value: 'Test category 3', label: 'Test category 3' },
];

export default function FilterPanel() {
  const { fetchJokes } = useJokesList();

  const handleOnClear = () => fetchJokes(QueryType.RANDOM_JOKE, '');

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect options={options} placeholder="Category Selector" />
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

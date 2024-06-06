import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { QueryType } from 'types/enums/queryTypes';
import { Option } from 'types/interfaces/CommonInterfaces';
import { StyledContainer, StyledSection } from './styled';

export default function FilterPanel() {
  const { fetchJokes, categoryList, changeCategory } = useJokesList();

  const handleOnClear = () => fetchJokes(QueryType.RANDOM_JOKE, '');

  const handleOnChangeCategory = (newValue: unknown) =>
    changeCategory(newValue as Option);

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect
          value={{ label: 'CELEBRITY', value: 'CELEBRITY' }}
          options={categoryList}
          placeholder="Category Selector"
          onChange={handleOnChangeCategory}
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

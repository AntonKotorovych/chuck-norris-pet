import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { StyledContainer, StyledSection, VerticalLineSeparator } from './styled';

export default function FilterPanel() {
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
        <Button variant="main">Add Favorite Jokes</Button>
      </StyledContainer>
      <StyledContainer>
        <Button variant="secondary">Favorite Jokes</Button>
      </StyledContainer>
    </StyledSection>
  );
}

import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import { StyledContainer, StyledSection } from './styled';

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
    </StyledSection>
  );
}

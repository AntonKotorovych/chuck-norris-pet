import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { QueryType } from 'types/enums/queryTypes';
import Button from 'components/Button';
import Input from 'components/Input';
import CategorySelect from 'components/CategorySelect';
import { useJokesList } from 'store/JokesListProvider';
import { StyledContainer, StyledSection } from './styled';

const options = [
  { value: 'Test category 1', label: 'Test category 1' },
  { value: 'Test category 2', label: 'Test category 2' },
  { value: 'Test category 3', label: 'Test category 3' },
];

export default function FilterPanel() {
  const [searchValue, setSearchValue] = useState('');
  const [showCrossButton, setShowCrossButton] = useState(false);
  const { fetchJokes } = useJokesList();

  const handleSearchButton = () => {
    if (searchValue.length < 3) return;
    fetchJokes(QueryType.SEARCH_BY_QUERY, searchValue);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleSearchButton();
  };

  const handleCrossButton = () => {
    setSearchValue('');
    setShowCrossButton(false);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    setShowCrossButton(newValue.length > 0);
  };

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect options={options} placeholder="Category Selector" />
      </StyledContainer>
      <StyledContainer>
        <Input
          placeholder="Search a joke..."
          value={searchValue}
          leftIcon="../assets/magnifying-glass.svg"
          rightIcon={showCrossButton ? '../assets/cross.svg' : ''}
          onSearch={handleSearchButton}
          onClear={handleCrossButton}
          onChange={handleChangeValue}
          onKeyDown={handleKeyDown}
          maxLength={13}
        />
      </StyledContainer>
      <StyledContainer>
        <Button onClick={handleSearchButton} variant="main">
          Search
        </Button>
      </StyledContainer>
      <StyledContainer>
        <Button variant="secondary">Clear Filtering</Button>
      </StyledContainer>
    </StyledSection>
  );
}

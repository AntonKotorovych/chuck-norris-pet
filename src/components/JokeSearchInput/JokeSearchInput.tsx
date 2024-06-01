import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import Input from 'components/Input';
import { QueryType } from 'types/enums/queryTypes';
import { StyledContainer, StyledNotification } from './styled';

export default function JokeSearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const { fetchJokes } = useJokesList();

  const handleSearch = () => {
    if (searchValue.length < 3) {
      setShowNotification(true);
      return;
    }
    showNotification && setShowNotification(false);

    fetchJokes(QueryType.SEARCH_BY_QUERY, searchValue);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleCrossButton = () => {
    setSearchValue('');
    setShowNotification(false);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value.length >= 3) setShowNotification(false);
  };

  const showCrossButton = searchValue.length > 0;

  return (
    <>
      <StyledContainer>
        {showNotification && (
          <StyledNotification>
            Please enter more than 3 characters
          </StyledNotification>
        )}
        <Input
          placeholder="Search a joke..."
          value={searchValue}
          leftIcon="../assets/magnifying-glass.svg"
          rightIcon={showCrossButton ? '../assets/cross.svg' : ''}
          onSearch={handleSearch}
          onClear={handleCrossButton}
          onChange={handleChangeValue}
          onKeyDown={handleKeyDown}
          maxLength={13}
        />
      </StyledContainer>
      <StyledContainer>
        <Button onClick={handleSearch} variant="main">
          Search
        </Button>
      </StyledContainer>
    </>
  );
}

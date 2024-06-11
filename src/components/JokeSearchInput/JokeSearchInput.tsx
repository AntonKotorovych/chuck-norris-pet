import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useFilters } from 'store/FiltersProvider';
import Button from 'components/Button';
import Input from 'components/Input';
import {
  MAX_ALLOWED_CHAR_QUANTITY,
  MIN_REQUIRED_CHAR_QUANTITY,
} from './constants';
import { StyledContainer, StyledNotification } from './styled';

export default function JokeSearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const { state, setSearch } = useFilters();

  useEffect(() => {
    state.query ? setSearchValue(state.query) : setSearchValue('');
  }, [state.query]);

  const trimmedSearchValue = searchValue.trim();

  const handleSearch = () => {
    if (trimmedSearchValue.length < MIN_REQUIRED_CHAR_QUANTITY) {
      setIsNotificationVisible(true);
      return;
    }

    if (isNotificationVisible) setIsNotificationVisible(false);

    setSearch(trimmedSearchValue);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleCrossButton = () => {
    setSearch('');
    setIsNotificationVisible(false);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (isNotificationVisible) setIsNotificationVisible(false);
  };

  const showCrossButton = trimmedSearchValue.length > 0;

  return (
    <>
      <StyledContainer>
        {isNotificationVisible && (
          <StyledNotification>
            Please enter more than {MIN_REQUIRED_CHAR_QUANTITY} characters
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
          maxLength={MAX_ALLOWED_CHAR_QUANTITY}
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

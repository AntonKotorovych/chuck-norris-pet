import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useJokesList } from 'store/JokesListProvider';
import Button from 'components/Button';
import Input from 'components/Input';
import { QueryType } from 'types/enums/queryTypes';
import {
  MAX_ALLOWED_CHAR_QUANTITY,
  MIN_REQUIRED_CHAR_QUANTITY,
} from './constants';
import { StyledContainer, StyledNotification } from './styled';

export default function JokeSearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const { fetchJokes } = useJokesList();

  const queryValue = new URLSearchParams(window.location.search).get('query');

  useEffect(() => {
    queryValue ? setSearchValue(queryValue) : setSearchValue('');
  }, [queryValue]);

  const trimmedSearchValue = searchValue.trim();

  const handleSearch = () => {
    if (trimmedSearchValue.length < MIN_REQUIRED_CHAR_QUANTITY) {
      setIsNotificationVisible(true);
      return;
    }

    if (isNotificationVisible) setIsNotificationVisible(false);

    fetchJokes(QueryType.SEARCH_BY_QUERY, trimmedSearchValue);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleCrossButton = () => {
    setSearchValue('');
    setIsNotificationVisible(false);
    fetchJokes(QueryType.RANDOM_JOKE, '');
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

import { ChangeEvent, useEffect, useRef } from 'react';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { Joke } from 'types/interfaces/CommonInterfaces';
import Checkbox from 'components/Checkbox';
import { StyledLabel, StyledText } from './styled';

interface Props {
  jokesList: Joke[];
}

export default function SelectAllCheckbox({ jokesList }: Props) {
  const selectAllJokes = useFavoriteJokesStore(state => state.selectAllJokes);
  const deselectAllJokes = useFavoriteJokesStore(state => state.deselectAllJokes);
  const allSelected = useFavoriteJokesStore(state => state.allSelected(jokesList));
  const someSelected = useFavoriteJokesStore(state => state.someSelected(jokesList));
  const noSelectedInJokesList = useFavoriteJokesStore(state =>
    state.noSelectedInJokesList(jokesList)
  );

  const selectAllRef = useRef<HTMLInputElement>(null);

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && jokesList) {
      selectAllJokes(jokesList);
    } else {
      deselectAllJokes(jokesList);
    }
  };

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate =
        !allSelected && someSelected && !noSelectedInJokesList;
    }
  }, [allSelected, someSelected, noSelectedInJokesList]);

  return (
    <StyledLabel htmlFor="selectAll">
      <Checkbox
        id="selectAll"
        ref={selectAllRef}
        checked={allSelected}
        onChange={handleSelectAll}
      />
      <StyledText>Select all</StyledText>
    </StyledLabel>
  );
}

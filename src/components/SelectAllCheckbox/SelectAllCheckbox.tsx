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
  const areAllSelected = useFavoriteJokesStore(state =>
    state.areAllSelected(jokesList)
  );
  const areSomeSelected = useFavoriteJokesStore(state =>
    state.areSomeSelected(jokesList)
  );
  const isNotSelected = useFavoriteJokesStore(state =>
    state.isNotSelected(jokesList)
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
        !areAllSelected && areSomeSelected && !isNotSelected;
    }
  }, [areAllSelected, areSomeSelected, isNotSelected]);

  return (
    <StyledLabel htmlFor="selectAll">
      <Checkbox
        id="selectAll"
        ref={selectAllRef}
        checked={areAllSelected}
        onChange={handleSelectAll}
      />
      <StyledText>Select all</StyledText>
    </StyledLabel>
  );
}

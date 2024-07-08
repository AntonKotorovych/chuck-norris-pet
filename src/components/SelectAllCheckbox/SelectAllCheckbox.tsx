import { ChangeEvent, useEffect, useRef } from 'react';
import { StyledCheckbox } from 'components/ManageJokes/JokeItemModal/styled';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { StyledLabel, StyledText } from './styled';

interface Props {
  jokesList: Joke[];
}

export default function SelectAllCheckbox({ jokesList }: Props) {
  const selectedJokes = useFavoriteJokesStore(state => state.selectedJokes);
  const selectAllJokes = useFavoriteJokesStore(state => state.selectAllJokes);
  const deselectAllJokes = useFavoriteJokesStore(state => state.deselectAllJokes);

  const allSelected = selectedJokes.length === jokesList?.length;
  const someSelected =
    selectedJokes.length > 0 && selectedJokes.length < jokesList.length;

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
      selectAllRef.current.indeterminate = !allSelected && someSelected;
    }
  }, [allSelected, someSelected]);

  return (
    <StyledLabel htmlFor="selectAll">
      <StyledCheckbox
        type="checkbox"
        id="selectAll"
        ref={selectAllRef}
        checked={allSelected}
        onChange={handleSelectAll}
      />
      <StyledText>Select all</StyledText>
    </StyledLabel>
  );
}

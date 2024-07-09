import Button from 'components/Button';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { StyledFooter, StyledWrapper } from './styled';

interface Props {
  onClose: VoidFunction;
}

export default function JokesFooterModal({ onClose }: Props) {
  const saveSelectedJokes = useFavoriteJokesStore(state => state.saveSelectedJokes);

  const handleSave = () => {
    saveSelectedJokes();
    onClose();
  };

  return (
    <StyledFooter>
      <StyledWrapper>
        <Button onClick={handleSave}>Save</Button>
      </StyledWrapper>
    </StyledFooter>
  );
}

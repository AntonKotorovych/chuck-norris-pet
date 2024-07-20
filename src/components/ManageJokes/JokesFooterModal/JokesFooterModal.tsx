import Button from 'components/Button';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { notify } from 'utils/notify';
import { StyledContainer, StyledWrapper } from './styled';

interface Props {
  onClose: VoidFunction;
}

export default function JokesFooterModal({ onClose }: Props) {
  const saveSelectedJokes = useFavoriteJokesStore(state => state.saveSelectedJokes);

  const handleSave = () => {
    saveSelectedJokes();
    onClose();
    notify('✅Saved to favorites!');
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <Button onClick={handleSave}>Save</Button>
      </StyledWrapper>
    </StyledContainer>
  );
}

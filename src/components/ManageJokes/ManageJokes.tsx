import Button from 'components/Button';
import { useModal } from 'hooks/useModal';
import { Joke } from 'types/interfaces/CommonInterfaces';
import ManageJokesModal from './ManageJokesModal';

interface Props {
  jokesList: Joke[];
  buttonText: string;
}

export default function ManageJokes({ jokesList, buttonText }: Props) {
  const isOpen = useModal(state => state.isOpen);
  const onOpen = useModal(state => state.onOpen);
  const onClose = useModal(state => state.onClose);

  return (
    <>
      <Button variant="main" onClick={onOpen}>
        {buttonText}
      </Button>
      <ManageJokesModal content={jokesList} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

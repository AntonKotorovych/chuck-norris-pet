import Button from 'components/Button';
import { useModal } from 'hooks/useModal';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import Modal from 'components/Modal';
import { useHamburgerMenu } from 'hooks/useHamburgerMenu';
import JokesHeaderModal from './JokesHeaderModal';
import JokesContentModal from './JokesContentModal';
import JokesFooterModal from './JokesFooterModal';

interface Props {
  jokesList: Joke[];
  buttonText: string;
}

export default function ManageJokes({ jokesList, buttonText }: Props) {
  const isOpen = useModal(state => state.isOpen);
  const onOpen = useModal(state => state.onOpen);
  const onClose = useModal(state => state.onClose);

  const { closeMenu } = useHamburgerMenu();

  const initializeSelectedJokes = useFavoriteJokesStore(
    state => state.initializeSelectedJokes
  );

  const handleOpen = () => {
    initializeSelectedJokes();
    onOpen();
    closeMenu();
  };

  return (
    <>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <Modal
        header={<JokesHeaderModal jokesList={jokesList} />}
        content={<JokesContentModal jokesList={jokesList} />}
        footer={<JokesFooterModal onClose={onClose} />}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

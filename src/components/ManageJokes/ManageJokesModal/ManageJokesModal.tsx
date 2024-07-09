import { Joke } from 'types/interfaces/CommonInterfaces';
import Modal from 'components/Modal';
import JokesContentModal from '../JokesContentModal';
import JokesHeaderModal from '../JokesHeaderModal';
import JokesFooterModal from '../JokesFooterModal';

import { StyledList, StyledNoJokesContainer, StyledText } from './styled';

interface JokesModal {
  content: Joke[];
  isOpen: boolean;
  onClose: VoidFunction;
}

export default function ManageJokesModal({ content, isOpen, onClose }: JokesModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <JokesHeaderModal onClose={onClose} jokesList={content} />
      <StyledList>
        {content?.length !== 0 && content !== null ? (
          <JokesContentModal jokesList={content} />
        ) : (
          <StyledNoJokesContainer>
            <StyledText>No Jokes</StyledText>
          </StyledNoJokesContainer>
        )}
      </StyledList>
      <JokesFooterModal onClose={onClose} />
    </Modal>
  );
}

import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { Joke } from 'types/interfaces/CommonInterfaces';
import JokesContentModal from '../JokesContentModal';
import JokesHeaderModal from '../JokesHeaderModal';
import JokesFooterModal from '../JokesFooterModal';

import { StyledList, StyledModal, StyledModalOverlay, StyledText } from './styled';

interface JokesModal {
  content: Joke[] | null;
  isOpen: boolean;
  onClose: VoidFunction;
}

export default function ManageJokesModal({ content, isOpen, onClose }: JokesModal) {
  const bodyRef = useRef(document.body);

  if (!isOpen) {
    bodyRef.current.style.overflow = 'visible';
    return null;
  } else {
    bodyRef.current.style.overflow = 'hidden';
  }

  const modalContainer = document.getElementById('modal-root');

  if (!modalContainer) return null;

  return createPortal(
    <StyledModalOverlay onClick={onClose}>
      <StyledModal onClick={event => event.stopPropagation()}>
        <JokesHeaderModal onClose={onClose} />
        <StyledList>
          {content?.length !== 0 && content !== null ? (
            <JokesContentModal jokesList={content} />
          ) : (
            <StyledText>No Jokes</StyledText>
          )}
        </StyledList>
        <JokesFooterModal />
      </StyledModal>
    </StyledModalOverlay>,
    modalContainer
  );
}

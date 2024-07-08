import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { Joke } from 'types/interfaces/CommonInterfaces';
import JokesContentModal from '../JokesContentModal';
import JokesHeaderModal from '../JokesHeaderModal';
import JokesFooterModal from '../JokesFooterModal';

import {
  StyledList,
  StyledModal,
  StyledModalOverlay,
  StyledNoJokesContainer,
  StyledText,
} from './styled';

interface JokesModal {
  content: Joke[];
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
      </StyledModal>
    </StyledModalOverlay>,
    modalContainer
  );
}

import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, StyledModalOverlay } from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
        {children}
      </StyledModal>
    </StyledModalOverlay>,
    modalContainer
  );
}

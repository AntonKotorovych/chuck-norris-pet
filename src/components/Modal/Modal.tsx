import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from 'components/Button';
import {
  StyledCloseWrapper,
  StyledContentContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledModal,
  StyledModalOverlay,
} from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  header,
  content,
  footer,
}: ModalProps) {
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
        <StyledHeaderContainer>
          {header}
          <StyledCloseWrapper>
            <Button variant="secondary" onClick={onClose}>
              ✖
            </Button>
          </StyledCloseWrapper>
        </StyledHeaderContainer>
        <StyledContentContainer>{content}</StyledContentContainer>
        <StyledFooterContainer>{footer}</StyledFooterContainer>
      </StyledModal>
    </StyledModalOverlay>,
    modalContainer
  );
}

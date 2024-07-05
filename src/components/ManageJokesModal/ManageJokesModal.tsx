import { createPortal } from 'react-dom';
import { useRef } from 'react';
import Button from 'components/Button';
import { Joke } from 'types/interfaces/CommonInterfaces';

import {
  StyledCheckbox,
  StyledCloseWrapper,
  StyledFooter,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledModalContent,
  StyledModalOverlay,
  StyledText,
  StyledWrapper,
} from './styled';

interface JokesModal {
  show: boolean;
  onClose: VoidFunction;
  jokesList: Joke[] | null;
}

export default function ManageJokesModal({ jokesList, show, onClose }: JokesModal) {
  const bodyRef = useRef(document.body);

  if (!show) {
    bodyRef.current.style.overflow = 'visible';
    return null;
  } else {
    bodyRef.current.style.overflow = 'hidden';
  }

  const modalContainer = document.getElementById('modal-root');

  if (!modalContainer) return null;

  return createPortal(
    <StyledModalOverlay onClick={onClose}>
      <StyledModalContent onClick={event => event.stopPropagation()}>
        <StyledHeader>
          <StyledText>Manage favorite jokes</StyledText>
          <StyledCloseWrapper>
            <Button variant="secondary" onClick={onClose}>
              ✖
            </Button>
          </StyledCloseWrapper>
        </StyledHeader>
        <StyledList>
          {jokesList?.length !== 0 && jokesList !== null ? (
            jokesList.map(joke => {
              return (
                <StyledListItem key={joke.id} title={joke.value}>
                  <StyledCheckbox type="checkbox" />
                  <StyledText>{joke.value}</StyledText>
                </StyledListItem>
              );
            })
          ) : (
            <StyledText>No Jokes</StyledText>
          )}
        </StyledList>
        <StyledFooter>
          <StyledWrapper>
            <Button variant="main">Save</Button>
          </StyledWrapper>
        </StyledFooter>
      </StyledModalContent>
    </StyledModalOverlay>,
    modalContainer
  );
}

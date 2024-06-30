import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';
import Button from 'components/Button';
import { Joke } from 'types/interfaces/CommonInterfaces';
import {
  StyledCheckbox,
  StyledFooter,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledModalContent,
  StyledModalOverlay,
  StyledText,
  StyledWrapper,
} from './styled';

interface JokesModal extends PropsWithChildren {
  show: boolean;
  onClose: VoidFunction;
  jokesList: Joke[];
}

export default function ManageJokesModal({
  jokesList,
  show,
  onClose,
  children,
}: JokesModal) {
  if (!show) return null;

  const modalContainer = document.getElementById('modal-root');

  if (!modalContainer) return null;

  return createPortal(
    <StyledModalOverlay onClick={onClose}>
      <StyledModalContent onClick={event => event.stopPropagation()}>
        <StyledHeader>Manage favorite jokes</StyledHeader>
        <StyledList>
          {jokesList.map(joke => {
            return (
              <StyledListItem key={joke.id} title={joke.value}>
                <StyledCheckbox type="checkbox" />
                <StyledText>{joke.value}</StyledText>
              </StyledListItem>
            );
          })}
        </StyledList>
        <StyledFooter>
          <StyledWrapper>
            <Button variant="main">Save</Button>
          </StyledWrapper>
        </StyledFooter>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>,
    modalContainer
  );
}

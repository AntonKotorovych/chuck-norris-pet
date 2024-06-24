import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  height: 2.5rem;
`;

export const StyledButton = styled.button`
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  & svg {
    height: inherit;
  }

  &:hover {
    transform: scale(1.3);
  }

  &:active {
    transition: none;
    transform: scale(1);
  }
`;

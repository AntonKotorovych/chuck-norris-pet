import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledListItem = styled.li<ThemeProps>`
  list-style: none;
  color: ${({ theme }) => theme.colors.third};
  border: 3px ${({ theme }) => theme.borderColor.primary} solid;
  margin: 1rem 0;
  padding: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColorListItem.primary};
  align-items: center;
  transition: box-shadow 0.1s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowStyle.secondary};
    cursor: pointer;
  }
`;

export const StyledCheckbox = styled.input`
  height: 1.5rem;
  min-width: 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;

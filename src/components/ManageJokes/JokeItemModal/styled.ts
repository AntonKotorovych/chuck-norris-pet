import styled from '@emotion/styled';
import { textTruncateStyles } from 'styled/truncateStyles';
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

export const StyledLabel = styled.label`
  white-space: nowrap;
  cursor: pointer;
`;

export const StyledText = styled.span`
  ${textTruncateStyles}
`;

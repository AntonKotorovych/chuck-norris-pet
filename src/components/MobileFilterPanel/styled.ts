import styled from '@emotion/styled';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledSection = styled.section<ThemeProps>`
  padding: 1rem;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledContainer = styled.div`
  height: 2.5rem;
  width: 60%;
`;

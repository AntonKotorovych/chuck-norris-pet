import styled from '@emotion/styled';
import { textTruncateStyles } from 'styled/truncateStyles';
import { ThemeProps } from 'types/interfaces/CommonInterfaces';

interface WrapperProps {
  hasJokes: boolean;
}

export const StyledWrapper = styled.div<ThemeProps & WrapperProps>`
  height: ${({ hasJokes }) => (hasJokes ? '6rem' : '3rem')};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSizes.regular};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.span`
  ${textTruncateStyles}
`;

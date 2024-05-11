import { withTheme, CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledTheme } from 'styled/theme';

export const customSelectStyles = {
  container: (baseStyles: CSSObject) => ({
    ...baseStyles,
    height: '100%',
  }),

  control: (baseStyles: CSSObject) => ({
    ...baseStyles,
    borderRadius: '20px',
    height: '100%',
    '&:hover': {
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.877)',
    },
  }),

  valueContainer: (baseStyles: CSSObject) => ({
    ...baseStyles,
    padding: '0 1rem',
  }),

  menu: (baseStyles: CSSObject) => ({
    ...baseStyles,
    backgroundColor: 'black',
  }),

  option: (baseStyles: CSSObject, state: { isFocused: boolean }) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? 'gray' : 'black',
    '&:hover': {
      backgroundColor: 'gray',
    },
  }),
};

export const StyledSection = styled.section`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledDiv = withTheme(styled.div<{ theme: StyledTheme }>`
  height: 100%;
  width: 23%;
  font-size: ${props => props.theme.fontSizes.small};
`);

export const StyledInputContainer = styled.div`
  height: 100%;
  position: relative;
`;

interface StyledSVGButtonProps {
  position?: 'left' | 'right';
}

export const StyledSVGButton = styled.button<StyledSVGButtonProps>`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: ${props => (props.position === 'left' ? '1rem' : 'auto')};
  right: ${props => (props.position === 'right' ? '1rem' : 'auto')};
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  & img {
    width: 100%;
  }

  &:hover {
    transform: translateY(-50%) scale(1.4);
  }

  &:active {
    transition: none;
    transform: translateY(-50%) scale(1);
  }
`;

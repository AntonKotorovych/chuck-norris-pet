import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledInputContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const StyledInput = styled.input<ThemeProps>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  height: 100%;
  width: 100%;
  font-size: inherit;
  border: none;
  padding-left: 3.5rem;

  @media screen and (max-width: 1350px) {
    padding-left: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    padding-left: 3rem;
  }
`;

export enum SvgPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

interface StyledSVGButtonProps {
  position?: SvgPosition;
}

export const StyledSVGButton = styled.button<StyledSVGButtonProps>`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: ${props => (props.position === SvgPosition.LEFT ? '1rem' : 'auto')};
  right: ${props => (props.position === SvgPosition.RIGHT ? '1rem' : 'auto')};
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media screen and (min-width: 900px) and (max-width: 1350px) {
    width: 18px;
    height: 18px;
    left: ${props => (props.position === SvgPosition.LEFT ? '0.2rem' : 'auto')};
    right: ${props => (props.position === SvgPosition.RIGHT ? '0.2rem' : 'auto')};
  }

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

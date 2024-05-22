import styled from '@emotion/styled';

import { ThemeProps } from 'types/interfaces/CommonInterfaces';

export const StyledInputContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const StyledInput = styled.input<ThemeProps>`
  border-radius: ${props => props.theme.borderRadius.sm};
  height: 100%;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
  border: none;
  padding: 0 3.5rem;
`;

export enum SvgPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

interface StyledSVGButtonProps {
  position?: SvgPosition.LEFT | SvgPosition.RIGHT;
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

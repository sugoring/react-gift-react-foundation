import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

const primaryColor = '#FEE500'
const secondaryColor = '#61DAFB'
const textColor = '#FFF'

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${textColor};

  ${({ theme }) =>
    theme === 'primary' &&
    css`
      background-color: ${primaryColor};
    `}

  ${({ theme }) =>
    theme === 'secondary' &&
    css`
      background-color: ${secondaryColor};
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 12px;
      padding: 8px 16px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 16px;
      padding: 10px 20px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 20px;
      padding: 12px 24px;
    `}

  ${({ size }) =>
    size === 'responsive' &&
    css`
      width: 100%;
      @media (min-width: 768px) {
        width: auto;
      }
    `}

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'primary' ? '#FDDC00' : theme === 'secondary' ? '#59C4E6' : 'initial'};
  }
`

import React from 'react'
import styled, { css } from 'styled-components'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const StyledInput = styled.input<InputProps>`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 12px;
      padding: 8px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 16px;
      padding: 10px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 20px;
      padding: 12px;
    `}

  ${({ size }) =>
    size === 'responsive' &&
    css`
      width: 100%;
      @media (min-width: 768px) {
        width: auto;
      }
    `}
`

const Input: React.FC<InputProps> = ({ size, ...props }) => {
  return <StyledInput size={size} {...props} />
}

Input.defaultProps = {
  size: 'medium',
}

export default Input

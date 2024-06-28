import React from 'react'
import styled, { css } from 'styled-components'

// 기본 InputHTMLAttributes 인터페이스에서 size 속성을 제거합니다.
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large' | 'responsive'
  invalid?: boolean
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

  ${({ invalid }) =>
    invalid &&
    css`
      border-color: red;
    `}

  &:disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
  }
`

const Input: React.FC<InputProps> = ({ size, invalid, ...props }) => {
  return <StyledInput size={size} invalid={invalid} {...props} />
}

Input.defaultProps = {
  size: 'medium',
  invalid: false,
}

export default Input

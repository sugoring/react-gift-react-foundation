import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  ${({ theme }) =>
    theme === 'primary' &&
    css`
      background-color: #fee500;
      color: #191919;
    `}

  ${({ theme }) =>
    theme === 'secondary' &&
    css`
      background-color: gray;
      color: black;
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
      theme === 'primary' ? '#FDDC00' : theme === 'secondary' ? '#bfbfbf' : 'initial'};
  }
`

const Button: React.FC<ButtonProps> = ({ theme, size, ...props }) => {
  return <StyledButton theme={theme} size={size} {...props} />
}

// defaultProps를 추가하여 기본 값 설정
Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
}

export default Button

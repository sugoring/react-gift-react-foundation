import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' // theme 속성 추가
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  // theme에 따른 스타일 설정
  ${({ theme }) =>
    theme === 'primary' &&
    css`
      background-color: blue;
      color: white;
    `}

  ${({ theme }) =>
    theme === 'secondary' &&
    css`
      background-color: gray;
      color: black;
    `}
`

const Button: React.FC<ButtonProps> = ({ theme = 'primary', ...props }) => {
  return <StyledButton theme={theme} {...props} />
}

export default Button

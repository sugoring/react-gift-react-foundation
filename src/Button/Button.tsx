import React from 'react'
import { StyledButton, ButtonProps } from './StyledButton'

const Button: React.FC<ButtonProps> = ({ theme, size, ...props }) => {
  return <StyledButton theme={theme} size={size} {...props} />
}

// defaultProps를 추가하여 기본 값 설정
Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
}

export default Button

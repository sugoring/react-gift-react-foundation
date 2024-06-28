import React from 'react'
import styled from 'styled-components'

// 기본 스타일을 설정한 StyledButton 컴포넌트
const StyledButton = styled.button`
  padding: 10px 20px; // 버튼의 패딩 설정
  border: none; // 버튼의 테두리 제거
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// 기본 Button 컴포넌트
const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props} /> // StyledButton 컴포넌트를 반환
}

export default Button

import React from 'react'
import styled from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
`

const Input: React.FC<InputProps> = props => {
  return <StyledInput {...props} />
}

export default Input

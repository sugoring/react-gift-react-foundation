import React, { InputHTMLAttributes } from 'react'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  invalid?: boolean
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const Input: React.FC<InputProps> = ({ disabled, invalid, size = 'medium', ...props }) => {
  return <input className={`input ${size} ${invalid ? 'invalid' : ''}`} disabled={disabled} {...props} />
}

export default Input

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

// Storybook 설정
export default {
  title: 'Components/Button', // 스토리의 제목
  component: Button, // 사용할 컴포넌트
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button', // 버튼의 기본 텍스트 설정
}

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary', // Primary 테마 설정
  children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary', // Secondary 테마 설정
  children: 'Secondary Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large', // Large 사이즈 설정
  children: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small', // Small 사이즈 설정
  children: 'Small Button',
}

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

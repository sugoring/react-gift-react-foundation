import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Image from './Image'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta<typeof Image>

const Template: StoryFn<typeof Image> = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  // 적절한 기본 props를 여기다 설정
}

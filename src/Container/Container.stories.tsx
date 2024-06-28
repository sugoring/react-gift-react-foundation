import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Container from './Container'

export default {
  title: 'Components/Container',
  component: Container,
} as Meta<typeof Container>

const Template: StoryFn<typeof Container> = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  // 적절한 기본 props를 여기다 설정
}

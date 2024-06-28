import React from 'react'
import { Meta, Story } from '@storybook/react'
import Container from './Container'

export default {
  title: 'Container',
  component: Container,
} as Meta

const Template: Story = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {}

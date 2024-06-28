import React from 'react'
import { Meta, Story } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

const Template: Story = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

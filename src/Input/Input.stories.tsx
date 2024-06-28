import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Input, { InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default Input',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  placeholder: 'Small Input',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  placeholder: 'Large Input',
}

export const Responsive = Template.bind({})
Responsive.args = {
  size: 'responsive',
  placeholder: 'Responsive Input',
}

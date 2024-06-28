import React from 'react'
import { Meta, Story } from '@storybook/react'
import Input, { InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    },
  },
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  invalid: false,
  size: 'medium',
  placeholder: 'Enter text...',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  invalid: false,
  size: 'medium',
  placeholder: 'Disabled input',
}

export const Invalid = Template.bind({})
Invalid.args = {
  disabled: false,
  invalid: true,
  size: 'medium',
  placeholder: 'Invalid input',
}

export const Responsive = Template.bind({})
Responsive.args = {
  disabled: false,
  invalid: false,
  size: 'responsive',
  placeholder: 'Responsive input',
}

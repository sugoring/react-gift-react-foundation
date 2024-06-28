import React from 'react'
import { Meta, Story } from '@storybook/react'
import Image from './Image'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

const Template: Story = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  // Add default args here
}

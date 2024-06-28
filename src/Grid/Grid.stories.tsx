import React from 'react'
import { Meta, Story } from '@storybook/react'
import Grid from './Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const Template: Story = args => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  // Add default args here
}

import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Grid, { GridProps } from './Grid'

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta

const Template: StoryFn<GridProps> = args => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'This is a grid',
}

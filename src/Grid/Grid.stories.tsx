import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Grid from './Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const Template: StoryFn = args => (
  <Grid {...args}>
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>{'Item 1'}</div>
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>{'Item 2'}</div>
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>{'Item 3'}</div>
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>{'Item 4'}</div>
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  columns: 2,
  gap: '16px',
}

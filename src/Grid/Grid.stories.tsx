import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Grid from './Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta<typeof Grid>

const Template: StoryFn<typeof Grid> = args => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  // 적절한 기본 props를 여기다 설정
}

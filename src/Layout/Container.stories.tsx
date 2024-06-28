import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Container, { ContainerProps } from './Container' // ContainerProps 가져오기

export default {
  title: 'Components/Container',
  component: Container,
} as Meta

const Template: StoryFn<ContainerProps> = args => (
  <Container {...args}>
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>{'Content'}</div>
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  padding: '16px',
  maxWidth: '1200px',
}

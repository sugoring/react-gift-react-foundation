import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Image, { ImageProps } from './Image'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

const Template: StoryFn<ImageProps> = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Default Image',
}

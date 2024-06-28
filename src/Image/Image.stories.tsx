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

export const Ratio16by9 = Template.bind({})
Ratio16by9.args = {
  src: 'https://via.placeholder.com/300',
  alt: '16:9 Image',
  ratio: '16/9',
}

export const Square = Template.bind({})
Square.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Square Image',
  ratio: 'square',
}

import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import GoodsItem, { GoodsItemProps } from './GoodsItem'

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
} as Meta

const Template: StoryFn<GoodsItemProps> = args => <GoodsItem {...args} />

export const Default = Template.bind({})
Default.args = {
  imageSrc: 'https://via.placeholder.com/150',
  subtitle: 'Subtitle',
  title: 'Title',
  amount: 10000,
}

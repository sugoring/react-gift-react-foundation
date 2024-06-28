import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import GoodsItem from './GoodsItem'

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
} as Meta<typeof GoodsItem>

const Template: StoryFn<typeof GoodsItem> = args => <GoodsItem {...args} />

export const Default = Template.bind({})
Default.args = {
  // 적절한 기본 props를 여기다 설정
}

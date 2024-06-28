import React from 'react'
import { Meta, Story } from '@storybook/react'
import GoodsItem from './GoodsItem'

export default {
  title: 'GoodsItem',
  component: GoodsItem,
} as Meta

const Template: Story = args => <GoodsItem {...args} />

export const Default = Template.bind({})
Default.args = {}

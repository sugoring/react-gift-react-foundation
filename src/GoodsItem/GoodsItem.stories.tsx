import React from 'react'
import { Meta, Story } from '@storybook/react'
import GoodsItem from './GoodsItem'

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
} as Meta

const Template: Story = rgs > <GoodsItem {...args} />

export const Default = Template.bind({})
Default.args = {
  // Add default args here
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Header, HeaderType } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' }
    },
    style: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>Überschrift {args.type}</Header>
)

export const HeaderComponentH1 = Template.bind({})
HeaderComponentH1.args = {
  type: HeaderType.h1
}
export const HeaderComponentH2 = Template.bind({})
HeaderComponentH2.args = {
  type: HeaderType.h2
}
export const HeaderComponentH3 = Template.bind({})
HeaderComponentH3.args = {
  type: HeaderType.h3
}
export const HeaderComponentH4 = Template.bind({})
HeaderComponentH4.args = {
  type: HeaderType.h4
}
export const HeaderComponentH4asH1 = Template.bind({})
HeaderComponentH4asH1.args = {
  type: HeaderType.h4,
  style: HeaderType.h1
}
export const HeaderComponentH1asH4 = Template.bind({})
HeaderComponentH1asH4.args = {
  type: HeaderType.h1,
  style: HeaderType.h4
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Textarea } from './textarea'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    rows: { control: 'number' },
    placeholder: { control: 'text' },
    label: { control: 'text' }
  }
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const TextareaComponentSmall = Template.bind({})
TextareaComponentSmall.args = {
  rows: 5,
  placeholder: "Was gibt's neues?",
  label: 'Textarea',
  id: 'textarea'
}
export const TextareaComponentLarge = Template.bind({})
TextareaComponentLarge.args = {
  rows: 5,
  placeholder: 'Deine Meinung zählt!',
  label: 'Textarea',
  id: 'textarea'
}

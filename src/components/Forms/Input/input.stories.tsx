import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './input'

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: 'radio',
      options: ['text', 'email', 'password']
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  type: 'text',
  label: 'Text Input'
}
export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  label: 'Email Input'
}
export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: 'password',
  label: 'Password Input'
}

import React, { Children } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from './modal'

export default {
  title: 'Layout/Modal',
  component: Modal,
  argTypes: {
    children: {},
    type: {
      control: 'radio',
      options: ['default', 'settings', 'upload']
    },
    title: { control: 'text' },
    initialState: { control: 'boolean' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>Titel</Modal>
)

export const ModalComponent = Template.bind({})
ModalComponent.args = {
  device: 'desktop',
  initialState: true,
  title: 'Modal'
}
export const ModalComponentMobile = Template.bind({})
ModalComponentMobile.args = {
  device: 'mobile',
  initialState: true,
  title: 'Modal'
}
export const ModalComponentSettings = Template.bind({})
ModalComponentSettings.args = {
  device: 'mobile',
  initialState: true,
  title: 'Settings'
}
export const ModalComponentUpload = Template.bind({})
ModalComponentUpload.args = {
  device: 'mobile',
  initialState: true,
  title: 'Bild hochladen'
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from './modal'

export default {
  title: 'Layout/Modal',
  component: Modal,
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'settings', 'upload']
    },
    title: { control: 'text' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>Titel</Modal>
)

export const ModalComponent = Template.bind({})
ModalComponent.args = {
  device: 'desktop',
  title: 'Modal'
}
export const ModalComponentMobile = Template.bind({})
ModalComponentMobile.args = {
  device: 'mobile',
  isOpen: true,
  title: 'Modal'
}
export const ModalComponentSettings = Template.bind({})
ModalComponentSettings.args = {
  device: 'mobile',
  isOpen: true,
  title: 'Settings'
}
export const ModalComponentUpload = Template.bind({})
ModalComponentUpload.args = {
  device: 'mobile',
  isOpen: true,
  title: 'Bild hochladen'
}

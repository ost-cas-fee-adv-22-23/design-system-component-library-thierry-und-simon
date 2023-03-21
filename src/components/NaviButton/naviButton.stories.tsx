import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NaviButton } from './naviButton'
import { IconType } from '../Icon/icon'

export default {
  title: 'Components/NaviButton',
  component: NaviButton,
  argTypes: {
    type: { control: 'radio'}
  }
} as ComponentMeta<typeof NaviButton>

const Template: ComponentStory<typeof NaviButton> = (args) => (
  <NaviButton {...args} />
)

export const NaviButtonSettings = Template.bind({})
NaviButtonSettings.args = {
    icon: IconType.edit,
    text: 'Settings'
}

export const NaviButtonLogout = Template.bind({})
NaviButtonLogout.args = {
    icon: IconType.logout,
    text: 'Log Out'
}
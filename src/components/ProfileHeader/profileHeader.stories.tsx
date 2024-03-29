import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ProfileHeader } from './profileHeader'

export default {
  title: 'Layout/ProfileHeader',
  component: ProfileHeader
} as ComponentMeta<typeof ProfileHeader>

const Template: ComponentStory<typeof ProfileHeader> = (args) => (
  <ProfileHeader {...args} />
)

export const defaultProfileHeader = Template.bind({})

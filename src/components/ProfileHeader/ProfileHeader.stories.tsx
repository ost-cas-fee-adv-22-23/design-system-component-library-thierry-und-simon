import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileHeader } from './ProfileHeader';

export default {
  title: 'Mocks/ProfileHeader',
  component: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => (
  <ProfileHeader {...args} />
);

export const defaultProfileHeader = Template.bind({});

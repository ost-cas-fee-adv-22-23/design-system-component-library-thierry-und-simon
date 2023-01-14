import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Mocks/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'mumble',
      values: [{ name: 'mumble', value: '#F1F5F9' }],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const defaultCard = Template.bind({});

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { SizeType, User } from '../User/user';
import { IconLink, IconLinkType } from '../IconLink/iconLink';
import { IconType } from '../Icon/Icon';

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

export const writeCard = Template.bind({});

defaultCard.args = {
  showProfileImage: true,
  children: (
    <>
      <User type={SizeType.BASE} />

      <p className='mt-m'>
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
        minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
        recusandae quos excepturi ut deleniti ut repellat magni.
      </p>

      <div className='my-m rounded-lg bg-violet-200 w-100 w-100 pt-16/9'></div>
      <div className='flex'>
        <IconLink
          type={IconLinkType.slate}
          icon={IconType.bubble}
          text='Message'
          textSize='text-sm'
        />
        <div className='ml-xl'>
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.like}
            text='Like'
            textSize='text-sm'
          />
        </div>
        <div className='ml-xl'>
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.share}
            text='Copy Link'
            textSize='text-xs'
          />
        </div>
      </div>
    </>
  ),
};

writeCard.args = {
  showProfileImage: true,
  children: (
    <>
      <h4>Hey, was läuft?</h4>
    </>
  ),
};

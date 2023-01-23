import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from './link'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {},
    link: { control: 'text' }
  }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link Label</Link>
)

export const LinkComponent = Template.bind({})
LinkComponent.args = {
  link: 'https://www.mumble.com'
}

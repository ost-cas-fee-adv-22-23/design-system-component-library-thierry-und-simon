import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InteractionButton, InteractionButtonType } from './interactionButton'

export default {
  title: 'Components/InteractionButton',
  component: InteractionButton,
  argTypes: {
    type: { control: 'radio', options: InteractionButtonType },
    count: { control: 'number' }
  }
} as ComponentMeta<typeof InteractionButton>

const Template: ComponentStory<typeof InteractionButton> = (args) => (
  <InteractionButton {...args} />
)

export const IconLinkComponentLike = Template.bind({})
IconLinkComponentLike.args = {
  type: InteractionButtonType.like
}
export const IconLinkComponentLikeCount = Template.bind({})
IconLinkComponentLikeCount.args = {
  type: InteractionButtonType.like,
  count: 5
}
export const IconLinkComponentComment = Template.bind({})
IconLinkComponentComment.args = {
  type: InteractionButtonType.comment
}
export const IconLinkComponentCommentCount = Template.bind({})
IconLinkComponentCommentCount.args = {
  type: InteractionButtonType.comment,
  count: 5
}
export const IconLinkComponentCopy = Template.bind({})
IconLinkComponentCopy.args = {
  type: InteractionButtonType.share
}

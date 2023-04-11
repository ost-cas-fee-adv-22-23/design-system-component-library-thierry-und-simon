import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Icon, IconType } from './icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: {
      options: [
        'SvgMumble',
        'SvgProfile',
        'SvgArrowDown',
        'SvgArrowLeft',
        'SvgArrowRight',
        'SvgArrowUp',
        'SvgBubble',
        'SvgBubbleDark',
        'SvgCalender',
        'SvgCancel',
        'SvgConfirm',
        'SvgEdit',
        'SvgExpand',
        'SvgLike',
        'SvgLikeDark',
        'SvgLogout',
        'SvgPin',
        'SvgReturn',
        'SvgSend',
        'SvgShare',
        'SvgTime',
        'SvgUpload',
        'SvgViews',
        'SvgLogoWide',
        'SvgLogoNarrow'
      ],
      control: { type: 'select' }
    },
    size: { control: 'number' }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const IconComponent = Template.bind({})
IconComponent.args = {
  type: IconType.mumble,
  size: 16
}

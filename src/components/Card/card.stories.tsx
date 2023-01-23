import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from './card'
import { SizeType, User } from '../User/user'
import { Icon, IconType } from '../Icon/icon'
import { Textarea } from '../Forms/Textarea/textarea'
import { Button, ButtonSize, ButtonColor } from '../Button/button'
import { Header, HeaderType } from '../Header/header'
import {
  InteractionButton,
  InteractionButtonType
} from '../InteractionButtons/interactionButton'

export default {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'mumble',
      values: [{ name: 'mumble', value: '#F1F5F9' }]
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const emptyCard = Template.bind({})

export const emptyCardInline = Template.bind({})

export const exampleCard = Template.bind({})

export const exampleCardInline = Template.bind({})

export const writeCard = Template.bind({})

export const writeCardInline = Template.bind({})

emptyCard.args = {
  showProfileImage: true
}

emptyCardInline.args = {
  showProfileImage: false,
  roundedBorders: false
}

exampleCard.args = {
  showProfileImage: true,
  children: (
    <>
      <User
        type={SizeType.BASE}
        userImageSrc="https://xsgames.co/randomusers/avatar.php?g=male"
      />

      <p className="mt-m">
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
        minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
        recusandae quos excepturi ut deleniti ut repellat magni.
      </p>
      <div className="my-m rounded-lg bg-violet-200 w-100 w-100 pt-16/9"></div>
      <div className="flex">
        <div>
          <InteractionButton type={InteractionButtonType.comment} count={0} />
        </div>
        <div className="ml-xl">
          <InteractionButton type={InteractionButtonType.like} count={0} />
        </div>
        <div className="ml-xl">
          <InteractionButton type={InteractionButtonType.share} count={0} />
        </div>
      </div>
    </>
  )
}

exampleCardInline.args = {
  roundedBorders: false,
  showProfileImge: false,
  children: (
    <>
      <User type={SizeType.BASE} />

      <p className="mt-m">
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
        minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
        recusandae quos excepturi ut deleniti ut repellat magni.
      </p>

      <div className="my-m rounded-lg bg-violet-200 w-100 w-100 pt-16/9"></div>
      <div className="flex">
        <div>
          <InteractionButton type={InteractionButtonType.comment} count={0} />
        </div>
        <div className="ml-xl">
          <InteractionButton type={InteractionButtonType.like} count={0} />
        </div>
        <div className="ml-xl">
          <InteractionButton type={InteractionButtonType.share} count={0} />
        </div>
      </div>
    </>
  )
}

writeCard.args = {
  showProfileImage: true,
  children: (
    <>
      <div className="mb-s">
        <Header type={HeaderType.h4} style={HeaderType.h4}>
          Hey, was läuft?
        </Header>
      </div>
      <Textarea placeholder="Deine Meinung zählt!" rows={5}></Textarea>
      <div className="flex mt-xs">
        <div className="mr-s flex grow">
          <Button
            size={ButtonSize.medium}
            color={ButtonColor.slate}
            label="Bild hochladen"
          >
            <span className="ml-xs">
              <Icon type={IconType.upload} color="white" />
            </span>
          </Button>
        </div>

        <Button
          size={ButtonSize.medium}
          color={ButtonColor.violet}
          label="Absenden"
        >
          <span className="ml-xs">
            <Icon type={IconType.send} color="white" />
          </span>
        </Button>
      </div>
    </>
  )
}

writeCardInline.args = {
  showProfileImage: false,
  roundedBorders: false,
  children: (
    <>
      <User type={SizeType.BASE} />
      <div className="mt-s">
        <Textarea placeholder="Deine Meinung zählt!" rows={5}></Textarea>
      </div>

      <div className="flex mt-xs">
        <div className="mr-s flex grow">
          <Button
            size={ButtonSize.medium}
            color={ButtonColor.slate}
            label="Bild hochladen"
          >
            <span className="ml-xs">
              <Icon type={IconType.upload} color="white" />
            </span>
          </Button>
        </div>

        <Button
          size={ButtonSize.medium}
          color={ButtonColor.violet}
          label="Absenden"
        >
          <span className="ml-xs">
            <Icon type={IconType.send} color="white" />
          </span>
        </Button>
      </div>
    </>
  )
}

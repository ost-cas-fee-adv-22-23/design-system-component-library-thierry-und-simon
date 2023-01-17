import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from './Card'
import { SizeType, User } from '../User/user'
import { IconLink, IconLinkType } from '../IconLink/iconLink'
import { Icon, IconType } from '../Icon/Icon'
import { Textarea } from '../Forms/Textarea/textarea'
import { Button, ButtonSize, ButtonColor } from '../Button/button'

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
      <User type={SizeType.BASE} />

      <p className="mt-m">
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
        minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
        recusandae quos excepturi ut deleniti ut repellat magni.
      </p>

      <div className="my-m rounded-lg bg-violet-200 w-100 w-100 pt-16/9"></div>
      <div className="flex">
        <IconLink
          type={IconLinkType.slate}
          icon={IconType.bubble}
          text="Message"
          textSize="text-sm"
        />
        <div className="ml-xl">
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.like}
            text="Like"
            textSize="text-sm"
          />
        </div>
        <div className="ml-xl">
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.share}
            text="Copy Link"
            textSize="text-xs"
          />
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
        <IconLink
          type={IconLinkType.slate}
          icon={IconType.bubble}
          text="Message"
          textSize="text-sm"
        />
        <div className="ml-xl">
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.like}
            text="Like"
            textSize="text-sm"
          />
        </div>
        <div className="ml-xl">
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.share}
            text="Copy Link"
            textSize="text-xs"
          />
        </div>
      </div>
    </>
  )
}

writeCard.args = {
  showProfileImage: true,
  children: (
    <>
      <h4 className="mb-s">Hey, was läuft?</h4>
      <Textarea placeholder="Deine Meinung zählt!"></Textarea>
      <div className="flex mt-xs">
        <div className="mr-s flex grow">
          <Button
            size={ButtonSize.medium}
            color={ButtonColor.slate}
            grow={true}
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
          grow={true}
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
        <Textarea placeholder="Deine Meinung zählt!"></Textarea>
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

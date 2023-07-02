import React, { FC } from 'react'
import { Button, ButtonColor, ButtonSize } from '../Button/button'
import { UserImage, UserImageSizeType } from '../UserImage/userImage'
import { IconLink, IconLinkType } from '../IconLink/iconLink'
import { Icon, IconType } from '../Icon/icon'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de'

export enum SizeType {
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = '2xl',
  TILE = 'tile'
}

export type UserProps = {
  type: SizeType
  fullName?: string
  userName?: string
  datePosted?: number
  dateJoined?: number
  hometown?: string
  userImageSrc?: string
}

function getDateMessage(date: number) {
  dayjs.locale('de')
  dayjs.extend(relativeTime)

  return dayjs(date).fromNow()
}

export const User: FC<UserProps> = ({
  type,
  fullName = 'John Doe',
  userName = 'johnny',
  datePosted = new Date().getTime(),
  dateJoined = new Date().getTime(),
  hometown = 'St. Gallen',
  userImageSrc
}) => {
  const datePostedMessage = getDateMessage(datePosted)
  const dateJoinedMessage = getDateMessage(dateJoined)

  return (
    <>
      {type !== SizeType.TILE ? (
        <div className="flex">
          {type == SizeType.SM && (
            <div className="mr-xs">
              <UserImage type={UserImageSizeType.S} imgSrc={userImageSrc} />
            </div>
          )}
          <div className="flex flex-col">
            <p className={`text-${type} mb-xs`}>{fullName}</p>
            <div className="flex">
              <div className="">
                <IconLink
                  type={IconLinkType.violet}
                  icon={IconType.profile}
                  text={userName}
                />
              </div>
              {type != SizeType.XL && type != SizeType.SM && (
                <div className="ml-s">
                  <IconLink
                    type={IconLinkType.slate}
                    icon={IconType.time}
                    text={datePostedMessage}
                  />
                </div>
              )}
              {type == SizeType.XL && (
                <>
                  <div className="ml-s">
                    <IconLink
                      type={IconLinkType.slate}
                      icon={IconType.pin}
                      text={hometown}
                    />
                  </div>
                  <div className="ml-s">
                    <IconLink
                      type={IconLinkType.slate}
                      icon={IconType.calender}
                      text={dateJoinedMessage}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex  w-auto grow-0">
          <div className="grow-0 bg-white rounded-xl  p-s">
            <div className="flex flex-col items-center">
              <UserImage type={UserImageSizeType.LG} imgSrc={userImageSrc} />
              <p className="text-base text-center mt-s mb-xs">{fullName}</p>
              <p className="text-xs text-violet-600 text-center mb-s">
                {userName}
              </p>
              <div className="flex w-full">
                <Button
                  label="Follow"
                  color={ButtonColor.violet}
                  size={ButtonSize.medium}
                >
                  <span className="ml-xs">
                    <Icon type={IconType.mumble} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

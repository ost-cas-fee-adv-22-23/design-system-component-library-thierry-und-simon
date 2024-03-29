import React, { FC, ReactNode } from 'react'
import { UserImage, UserImageSizeType } from '../UserImage/userImage'

export enum CardType {
  mumble = 'SvgMumble',
  profile = 'SvgProfile'
}

export type CardProps = {
  showProfileImage: boolean
  profileImageUrl?: string
  roundedBorders: boolean
  children: ReactNode
}

export const Card: FC<CardProps> = ({
  showProfileImage,
  children,
  roundedBorders = true,
  profileImageUrl
}) => {
  return (
    <div
      className={`d-flex flex-column px-xl py-l bg-white relative ${
        roundedBorders && 'rounded-xl'
      }`}
    >
      {showProfileImage && (
        <div className="absolute -left-l">
          <UserImage type={UserImageSizeType.M} imgSrc={profileImageUrl} />
        </div>
      )}

      {children}
    </div>
  )
}

import React, { FC } from 'react'
import { SizeType, User } from '../User/user'
import { UserImage, UserImageSizeType } from '../UserImage/userImage'

export const ProfileHeader: FC = ({ ...props }) => {
  return (
    <div>
      <div className="w-100 pt-16/9 bg-violet-200 rounded-lg relative mb-l relative">
        <div className="overflow-hidden absolute w-full h-full top-0 bottom-0 overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={'https://picsum.photos/800/600'}
          />
        </div>
        <div className="absolute -bottom-xxl right-l">
          <UserImage type={UserImageSizeType.XL} />
        </div>
      </div>
      <User
        type={SizeType.XL}
        fullName="Ruedi Müller"
        userName="rmueller"
        hometown="Zürich"
        datePosted={new Date('2021-08-12').getTime()}
        dateJoined={new Date('2020-02-12').getTime()}
      />
      <p className="mt-s">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </div>
  )
}

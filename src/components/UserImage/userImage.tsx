import React, { FC } from 'react'
import { Icon, IconType } from '../Icon/icon'

export enum UserImageSizeType {
  S = 's',
  M = 'm',
  LG = 'lg',
  XL = 'xl'
}

export type UserImageProps = {
  type: UserImageSizeType
  imgSrc?: string
}

export const UserImage: FC<UserImageProps> = ({
  type,
  imgSrc = 'https://ui-avatars.com/api/?background=random&size=512'
}) => {
  let size = ''

  switch (type) {
    case UserImageSizeType.S:
      size = 'w-10 h-10'
      break
    case UserImageSizeType.M:
      size = 'w-16 h-16 border-md border-slate-100'
      break
    case UserImageSizeType.LG:
      size = 'w-24 h-24 border-md border-slate-100'
      break
    case UserImageSizeType.XL:
      size = 'w-40 h-40 border-md border-slate-100'
      break
  }

  return (
    <div
      className={`rounded-full group bg-violet-200 relative overflow-hidden ${size}`}
    >
      <img className="" src={imgSrc} />
      {type == UserImageSizeType.XL && (
        <div className="absolute bottom-0 right-0 rounded-full bg-slate-600 p-s opacity-0 cursor-pointer group-hover:opacity-100">
          <Icon type={IconType.edit} color="white" />
        </div>
      )}
    </div>
  )
}

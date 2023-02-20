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

const classes = {
  wrapperGeneral: 'rounded-full group bg-violet-200 relative',
  sizes: (size: UserImageSizeType) => {
    const classesMap = {
      [UserImageSizeType.S]: 'w-10 h-10',
      [UserImageSizeType.M]: 'w-16 h-16 border-md border-slate-100',
      [UserImageSizeType.LG]: 'w-24 h-24 border-md border-slate-100',
      [UserImageSizeType.XL]: 'w-40 h-40 border-md border-slate-100'
    }
    return classesMap[size]
  }
}

export const UserImage: FC<UserImageProps> = ({ type, imgSrc }) => {
  return (
    <div className={`${classes.wrapperGeneral} ${classes.sizes(type)}`}>
      <div className="absolute top-0 bottom-0 w-full rounded-full overflow-hidden">
        <img src={imgSrc} />
      </div>

      {type == UserImageSizeType.XL && (
        <div className="absolute -bottom-2 -right-2 rounded-full border-sm border-slate-100 bg-slate-600 p-s opacity-0 cursor-pointer group-hover:opacity-100">
          <Icon type={IconType.edit} />
        </div>
      )}
    </div>
  )
}

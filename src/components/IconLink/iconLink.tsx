import React, { FC } from 'react'
import { Icon, IconType } from '../Icon/icon'

export enum IconLinkType {
  slate = 'slate-400',
  violet = 'violet-600'
}

export type IconLinkProps = {
  type: IconLinkType
  icon: IconType
  text: string
}

const classes = {
  wrapperGeneral: 'flex items-center gap-x-1',
  wrapperColor: (type: IconLinkType) => {
    const classesMap = {
      [IconLinkType.slate]: 'text-slate-400 hover:text-slate-600',

      [IconLinkType.violet]: 'text-violet-600 hover:text-violet-900'
    }
    return classesMap[type]
  }
}

export const IconLink: FC<IconLinkProps> = ({ type, icon, text }) => {
  return (
    <div className={`${classes.wrapperGeneral} ${classes.wrapperColor(type)}`}>
      <Icon type={icon} />
      <p className="text-xs">{text}</p>
    </div>
  )
}

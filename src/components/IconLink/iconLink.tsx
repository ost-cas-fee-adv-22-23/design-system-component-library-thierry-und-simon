import React, { FC, useState } from 'react'
import { Icon, IconType } from '../Icon/icon'

type HoverType = 'false' | 'true'

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
  },
  IconColor: (type: IconLinkType, hover: HoverType) => {
    const classesMap = {
      [IconLinkType.slate]: {
        false: '#94A3B8',
        true: '#475569'
      },
      [IconLinkType.violet]: {
        false: '#7C3AED',
        true: '#4C1D95'
      }
    }
    return classesMap[type][hover]
  }
}

export const IconLink: FC<IconLinkProps> = ({ type, icon, text }) => {
  const [hover, setHover] = useState<HoverType>('false')

  return (
    <div
      className={`${classes.wrapperGeneral} ${classes.wrapperColor(type)}`}
      onMouseEnter={() => setHover('true')}
      onMouseLeave={() => setHover('false')}
    >
      <Icon type={icon} color={classes.IconColor(type, hover)} />
      <p className="textr-xs">{text}</p>
    </div>
  )
}

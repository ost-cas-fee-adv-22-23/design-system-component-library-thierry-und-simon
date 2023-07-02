import React, { FC, ReactNode } from 'react'
import { Icon, IconType } from '../Icon/icon'

export enum ButtonSize {
  medium = 'medium',
  large = 'large',
  nolabel = 'nolabel'
}

export enum ButtonColor {
  violet = 'violet',
  slate = 'slate',
  gradiant = 'gradiant'
}

export type ButtonProps = {
  size: ButtonSize
  color: ButtonColor
  label?: string
  children?: ReactNode
  onClick?: any
}

const classes = {
  wrapperGeneral:
    'grow text-sm text-center text-white outline outline-transparent outline-4 transition flex items-center box-border',
  spacing: (size: ButtonSize) => {
    const classesMap = {
      [ButtonSize.large]: 'py-s px-m rounded-lg',
      [ButtonSize.medium]: 'p-xs rounded-lg',
      [ButtonSize.nolabel]: 'p-s rounded-full'
    }
    return classesMap[size]
  },
  colors: (color: ButtonColor) => {
    const classesMap = {
      [ButtonColor.slate]:
        'bg-slate-600 hover:bg-slate-700 hover:outline-slate-100  active:outline-slate-200',
      [ButtonColor.violet]:
        'bg-violet-600  hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200',
      [ButtonColor.gradiant]:
        'bg-gradient-to-r from-pink-400 to-violet-700 hover:via-violet-700 hover:to-violet-700 hover:outline-violet-100 active:outline-violet-200'
    }
    return classesMap[color]
  }
}

export const Button: FC<ButtonProps> = ({
  color,
  size,
  label,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={`${classes.wrapperGeneral} ${classes.spacing(
        size
      )} ${classes.colors(color)}`}
      {...props}
    >
      {size == ButtonSize.nolabel ? (
        <Icon type={IconType.mumble} />
      ) : (
        <span className="mx-auto flex">
          {label}
          {children}
        </span>
      )}
    </button>
  )
}

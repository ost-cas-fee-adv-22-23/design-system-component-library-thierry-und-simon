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
  label: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({
  color,
  size,
  label,
  children,
  ...props
}) => {
  let colorClasses = ''
  switch (color) {
    case ButtonColor.violet:
      colorClasses =
        'bg-violet-600  hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200'
      break
    case ButtonColor.slate:
      colorClasses =
        'bg-slate-600 hover:bg-slate-700 hover:outline-slate-100  active:outline-slate-200'
      break
    case ButtonColor.gradiant:
      colorClasses =
        'bg-gradient-to-r from-pink-400 to-violet-700 hover:via-violet-700 hover:to-violet-700 hover:outline-violet-100 active:outline-violet-200'
      break
  }

  let spacingClasses = ''
  switch (size) {
    case ButtonSize.large:
      spacingClasses = 'py-s px-m rounded-lg'
      break
    case ButtonSize.medium:
      spacingClasses = 'p-xs rounded-lg'
      break
    case ButtonSize.nolabel:
      spacingClasses = 'p-s rounded-full'
      break
  }

  return (
    <button
      type="button"
      className={`${colorClasses} ${spacingClasses} grow text-sm text-center text-white outline outline-transparent outline-4 transition flex items-center box-border`}
      {...props}
    >
      {size == 'nolabel' ? (
        <Icon type={IconType.mumble} color="white" />
      ) : (
        <span className="mx-auto flex">
          {label}
          {children}
        </span>
      )}
    </button>
  )
}

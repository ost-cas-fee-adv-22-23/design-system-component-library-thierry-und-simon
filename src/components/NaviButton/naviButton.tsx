import React, { FC } from 'react'
import { Icon, IconType } from '../Icon/icon'

export type NaviButtonProps = {
  icon: IconType
  text: string
}

const classes = {
    base: 'flex flex-col text-white bg-violet-600 hover:bg-violet-700 justify-center items-center rounded-lg px-2 py-3 gap-1'
}

export const NaviButton: FC<NaviButtonProps> = ({ icon, text }) => {
  return (
    <button className={classes.base}>
      <Icon type={icon} />
      <p className="text-xs">{text}</p>
    </button>
  )
}

import React, { FC } from 'react'
import { Icon, IconType } from '../Icon/Icon'

export type LogoProps = {
  type: 'default' | 'gradient' | 'white'
  layout: 'horizontal' | 'vertical'
  children: React.ReactNode
}

export const Logo: FC<LogoProps> = ({ children, type, layout }) => {
  return (
    <div>
      <Icon type={IconType.mumble} color="#7C3AED" />
    </div>
  )
}

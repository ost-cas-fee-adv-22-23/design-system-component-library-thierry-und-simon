import { FC, ReactNode, createElement } from 'react'

export enum HeaderType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4'
}

export type HeaderProps = {
  type: HeaderType
  style: HeaderType
  children: ReactNode
}

const classes = {
  header: (style: HeaderType) => {
    const classesMap = {
      [HeaderType.h1]: 'text-4xl bold text-current',
      [HeaderType.h2]: 'text-3xl bold text-current',
      [HeaderType.h3]: 'text-2xl semibold text-current',
      [HeaderType.h4]: 'text-xl semibold text-current'
    }
    return classesMap[style]
  }
}

export const Header: FC<HeaderProps> = ({ type, style = type, children }) => {
  const tag = createElement(
    type,
    { className: classes.header(style) },
    children
  )
  return tag
}

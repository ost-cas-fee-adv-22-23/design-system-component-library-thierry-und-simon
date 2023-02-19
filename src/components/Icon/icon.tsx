import React, { FC } from 'react'
import SvgMumble from '../../Icons/Mumble'
import SvgProfile from '../../Icons/Profile'
import SvgArrowDown from '../../Icons/ArrowDown'
import SvgArrowLeft from '../../Icons/ArrowLeft'
import SvgArrowRight from '../../Icons/ArrowRight'
import SvgArrowUp from '../../Icons/ArrowUp'
import SvgBubble from '../../Icons/Bubble'
import SvgBubbleDark from '../../Icons/BubbleDark'
import SvgCalender from '../../Icons/Calender'
import SvgCancel from '../../Icons/Cancel'
import SvgConfirm from '../../Icons/Confirm'
import SvgEdit from '../../Icons/Edit'
import SvgExpand from '../../Icons/Expand'
import SvgLike from '../../Icons/Like'
import SvgLikeDark from '../../Icons/LikeDark'
import SvgLogout from '../../Icons/Logout'
import SvgPin from '../../Icons/Pin'
import SvgReturn from '../../Icons/Return'
import SvgSend from '../../Icons/Send'
import SvgShare from '../../Icons/Share'
import SvgTime from '../../Icons/Time'
import SvgUpload from '../../Icons/Upload'
import SvgViews from '../../Icons/Views'

export enum IconType {
  mumble = 'SvgMumble',
  profile = 'SvgProfile',
  arrow_down = 'SvgArrowDown',
  arrow_up = 'SvgArrowUp',
  arrow_left = 'SvgArrowLeft',
  arrow_right = 'SvgArrowRight',
  bubble = 'SvgBubble',
  bubble_dark = 'SvgBubbleDark',
  calender = 'SvgCalender',
  cancel = 'SvgCancel',
  confirm = 'SvgConfirm',
  edit = 'SvgEdit',
  views = 'SvgViews',
  like_dark = 'SvgLikeDark',
  like = 'SvgLike',
  logout = 'SvgLogout',
  pin = 'SvgPin',
  return = 'SvgReturn',
  send = 'SvgSend',
  expand = 'SvgExpand',
  share = 'SvgShare',
  upload = 'SvgUpload',
  time = 'SvgTime'
}

export type IconProps = {
  size?: number
  type: IconType
}

export const Icon: FC<IconProps> = ({ type, size = 16 }) => {
  const icons = {
    SvgMumble,
    SvgProfile,
    SvgArrowDown,
    SvgArrowUp,
    SvgArrowLeft,
    SvgArrowRight,
    SvgBubble,
    SvgBubbleDark,
    SvgCalender,
    SvgCancel,
    SvgConfirm,
    SvgEdit,
    SvgExpand,
    SvgLike,
    SvgLikeDark,
    SvgLogout,
    SvgPin,
    SvgReturn,
    SvgSend,
    SvgShare,
    SvgTime,
    SvgUpload,
    SvgViews
  }

  const SvgIcon = icons[type]

  return <SvgIcon width={size} height={size} fill="currentColor" />
}

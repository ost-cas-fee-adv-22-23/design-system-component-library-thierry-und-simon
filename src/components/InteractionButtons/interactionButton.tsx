import React, { FC, useEffect, useState } from 'react'
import { IconType, Icon } from '../Icon/icon'

export enum InteractionButtonType {
  like = 'like',
  comment = 'comment',
  share = 'share'
}

type IconLinkProps = {
  type: InteractionButtonType
  count?: number
}

type ContentProps = {
  count: number
  color?: string
}

const classes = {
  wrapperGeneral:
    'flex items-center gap-x-2 px-3 py-2 rounded-2xl transition-colors duration-300'
}

const LikeContent: FC<ContentProps> = ({ count }) => {
  const [liked, setLiked] = useState(false)
  const [localCount, setLocalCount] = useState(count)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    setLocalCount(count)
  }, [count])

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      setLocalCount(localCount + 1)
    } else {
      setLiked(false)
      setLocalCount(localCount - 1)
    }
  }

  const currentIconColor =
    hover || (localCount > 0 && liked) ? '#EC4899' : '#475569'

  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-pink-50 ${
        localCount > 0 || liked
          ? 'text-pink-900 hover:text-pink-600'
          : 'text-slate-600 hover:text-pink-600'
      }`}
      onClick={() => handleLike()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon
        type={localCount === 0 || !liked ? IconType.like : IconType.like_dark}
        color={currentIconColor}
      />
      <p>
        {localCount === 0
          ? 'Like'
          : `${localCount} Like${localCount > 1 ? 's' : ''}`}
      </p>
    </button>
  )
}

const CommentContent: FC<ContentProps> = ({ count }) => {
  const [hover, setHover] = useState(false)

  const currentIconColor = hover || count > 0 ? '#7C3AED' : '#475569'

  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-violet-50 text-slate-600 hover:text-violet-600`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon
        type={count === 0 ? IconType.bubble : IconType.bubble_dark}
        color={currentIconColor}
      />
      <p>{count === 0 ? 'Comment' : `${count} Comments`}</p>
    </button>
  )
}

const CopyContent: FC<ContentProps> = () => {
  const iconColor = '#475569'
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(true)

    setTimeout(() => {
      setClicked(false)
    }, 1500)
  }

  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-slate-100 text-slate-600`}
      onClick={() => {
        handleClick()
      }}
    >
      <Icon type={IconType.share} color={iconColor} />
      <p>{clicked ? 'Link copied' : 'Copy Link'}</p>
    </button>
  )
}

export const InteractionButton: FC<IconLinkProps> = ({ type, count = 0 }) => {
  return (
    <>
      {type === InteractionButtonType.like ? (
        <LikeContent count={count} />
      ) : type === InteractionButtonType.comment ? (
        <CommentContent count={count} />
      ) : (
        <CopyContent count={count} />
      )}
    </>
  )
}

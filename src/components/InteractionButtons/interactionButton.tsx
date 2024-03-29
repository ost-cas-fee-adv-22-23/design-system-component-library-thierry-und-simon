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
  onClick: () => void
  hasLiked?: boolean
}

type ContentProps = {
  count: number
  color?: string
  onClick: () => void
  hasLiked?: boolean
}

const classes = {
  wrapperGeneral:
    'flex items-center gap-x-2 px-3 py-2 rounded-2xl transition-colors duration-300'
}

const LikeContent: FC<ContentProps> = ({
  count,
  onClick,
  hasLiked = false,
  ...props
}) => {
  const [liked, setLiked] = useState(hasLiked)
  const [localCount, setLocalCount] = useState(count)

  useEffect(() => {
    setLocalCount(count)
  }, [count])

  const handleLike = () => {
    console.log(liked)
    if (!liked) {
      setLiked(true)
      setLocalCount(localCount + 1)
    } else {
      setLiked(false)
      setLocalCount(localCount - 1)
    }

    onClick()
  }

  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-pink-50 ${
        liked
          ? 'text-pink-900 hover:text-pink-600'
          : 'text-slate-600 hover:text-pink-600'
      }`}
      onClick={() => handleLike()}
      {...props}
    >
      <Icon type={!liked ? IconType.like : IconType.like_dark} />
      <p>
        {localCount === 0
          ? 'Like'
          : `${localCount} Like${localCount > 1 ? 's' : ''}`}
      </p>
    </button>
  )
}

const CommentContent: FC<ContentProps> = ({ count, onClick }) => {
  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-violet-50 text-slate-600 hover:text-violet-600`}
      onClick={onClick}
    >
      <Icon type={count === 0 ? IconType.bubble : IconType.bubble_dark} />
      <p>{count === 0 ? 'Comment' : `${count} Comments`}</p>
    </button>
  )
}

const CopyContent: FC<ContentProps> = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(true)

    setTimeout(() => {
      setClicked(false)
    }, 1500)

    onClick()
  }

  return (
    <button
      className={`${classes.wrapperGeneral}  hover:bg-slate-100 text-slate-600`}
      onClick={() => {
        handleClick()
      }}
    >
      <Icon type={IconType.share} />
      <p>{clicked ? 'Link copied' : 'Copy Link'}</p>
    </button>
  )
}

export const InteractionButton: FC<IconLinkProps> = ({
  type,
  count = 0,
  onClick,
  hasLiked,
  ...props
}) => {
  return (
    <>
      {type === InteractionButtonType.like ? (
        <LikeContent count={count} onClick={onClick} hasLiked={hasLiked} {...props} />
      ) : type === InteractionButtonType.comment ? (
        <CommentContent count={count} onClick={onClick} />
      ) : (
        <CopyContent count={count} onClick={onClick} />
      )}
    </>
  )
}

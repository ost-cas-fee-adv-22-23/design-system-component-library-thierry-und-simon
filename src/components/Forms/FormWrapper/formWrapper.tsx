import React, { FC } from 'react'

export type LinkProps = {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FormWrapper: FC<LinkProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>
}

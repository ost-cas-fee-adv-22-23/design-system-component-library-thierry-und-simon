import React, { FC } from 'react'

export type FormWrapperProps = {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const FormWrapper: FC<FormWrapperProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>
}

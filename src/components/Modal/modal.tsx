import React, { FC, useState } from 'react'
import { Icon, IconType } from '../Icon/icon'

export enum ModalDevice {
  mobile = 'mobile',
  desktop = 'desktop'
}

export type ModalProps = {
  device: ModalDevice
  title: string
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: any
}

const classes = {
  wrapper: (open: boolean) => {
    return open
      ? 'z-10 fixed flex justify-center items-center w-full h-full top-0 left-0 bg-transparent'
      : 'hidden'
  },
  modal: (device: ModalDevice) => {
    const classesMap = {
      mobile: 'w-10/12 max-w-md',
      desktop: 'w-1/2'
    }
    return `${classesMap[device]} m-xl bg-white rounded-lg z-10`
  },
  title:
    'flex self-center items-center justify-between h-[88px] px-l bg-violet-600 rounded-t-lg',
  titleContent: 'text-white',
  bodyContent: 'p-l'
}

export const Modal: FC<ModalProps> = ({
  children,
  title,
  device,
  isOpen = false,
  setIsOpen
}) => {
  return (
    <div className={classes.wrapper(isOpen)}>
      <div className="z-1 modal-overlay absolute w-full h-full bg-slate-400 opacity-50"></div>
      <section className={classes.modal(device)}>
        <section className={classes.title}>
          <h3 className={classes.titleContent}>{title}</h3>
          <span
            className="cursor-pointer hover:opacity-50"
            onClick={() => setIsOpen(false)}
          >
            <Icon type={IconType.cancel} />
          </span>
        </section>
        <section className={classes.bodyContent}>{children}</section>
      </section>
    </div>
  )
}

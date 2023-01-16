import React, { FC, useState } from "react";
import { Icon, IconType } from "../Icon/Icon";

export enum ModalDevice {
  mobile = "mobile",
  desktop = "desktop",
}

export type ModalProps = {
  device: ModalDevice;
  title: string;
  children: React.ReactNode;
  initialState: Boolean;
};

const classes = {
  wrapper: (open: Boolean) => {
    return open
      ? "flex justify-center align-center w-screen h-screen bg-slate-100"
      : "hidden";
  },
  modal: (device: ModalDevice) => {
    const classesMap = {
      mobile: "w-10/12 max-w-md",
      desktop: "w-1/2",
    };
    return `${classesMap[device]} m-xl bg-white rounded-lg`;
  },
  title:
    "flex items-center justify-between h-[88px] px-l bg-violet-600 rounded-t-lg",
  titleContent: "text-white",
  bodyContent: "p-l",
};

export const Modal: FC<ModalProps> = ({
  children,
  title,
  device,
  initialState,
}) => {
  const [open, setOpen] = useState(initialState);
  return (
    <div className={classes.wrapper(open)}>
      <section className={classes.modal(device)}>
        <section className={classes.title}>
          <h3 className={classes.titleContent}>{title}</h3>
          <span onClick={() => setOpen(false)}>
            <Icon type={IconType.cancel} color="#ffffff" />
          </span>
        </section>
        <section className={classes.bodyContent}>{children}</section>
      </section>
    </div>
  );
};

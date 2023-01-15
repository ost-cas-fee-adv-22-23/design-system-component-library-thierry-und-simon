import React, { FC } from "react";
import { Icon, IconType } from "../Icon/Icon";

export type ModalProps = {
  type: "default" | "settings" | "upload";
  device: "mobile" | "desktop";
  title: string;
  children: React.ReactNode;
};

const classes = {
  wrapper: "flex justify-center align-center w-screen h-screen bg-slate-100",
  modal: "w-10/12 m-xl bg-white rounded-lg",
  modalD: (device: any) => {
    const classesMap = {
      mobile: "w-10/12",
      desktop: "w-1/2",
    };
    return "w-10/12 m-xl bg-white rounded-lg";
  },
  title:
    "flex items-center justify-between h-[60px] px-l bg-violet-600 rounded-t-lg",
  titleContent: "text-white",
  bodyContent: "p-l",
};

export const Modal: FC<ModalProps> = ({ children, title, type, device }) => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.modal}>
        <section className={classes.title}>
          <h3 className={classes.titleContent}>{title}</h3>
          <Icon type={IconType.cancel} color="#ffffff" />
        </section>
        <section className={classes.bodyContent}>{children}</section>
      </section>
    </div>
  );
};

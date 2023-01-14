import { FC, ReactNode, createElement } from "react";

export enum HeaderType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

export type HeaderProps = {
  type: HeaderType;
  children: ReactNode;
};

const classes = {
  header: "text-slate-600",
};

export const Header: FC<HeaderProps> = ({ type, children }) => {
  const tag = createElement(type, { className: classes.header }, children);
  return tag;
};

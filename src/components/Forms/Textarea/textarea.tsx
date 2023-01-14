import React, { FC } from "react";

export type TextareaProps = {
  children: React.ReactNode;
  placeholder: string;
  cols: number;
  rows: number;
};

export const Textarea: FC<TextareaProps> = ({
  children,
  placeholder,
  rows = 5,
  cols = 30,
}) => {
  return (
    <textarea
      className="p-4 text-[20px] text-slate-900 placeholder:text-slate-500 bg-slate-100 rounded-lg resize-none border border-slate-200 hover:border-slate-300 hover:border-2 focus:border-2 focus:outline-none focus:border-violet-600"
      rows={rows}
      cols={cols}
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
};

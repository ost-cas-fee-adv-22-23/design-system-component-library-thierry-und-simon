import React, { FC } from 'react'
import { Label, LabelType } from '../Label/label'

export type TextareaProps = {
  label?: string
  id?: string
  placeholder?: string
  rows: number
}

const classes = {
  textarea:
    'p-4 m-[1px] w-full text-[20px] text-slate-900 placeholder:text-slate-500 bg-slate-100 rounded-lg resize-none outline outline-1 outline-slate-200',
  textareaHover: 'p-4 hover:outline-slate-300 hover:outline-2',
  textareaFocus: 'p-4 focus:outline-2 focus:outline-violet-600'
}

export const Textarea: FC<TextareaProps> = ({
  placeholder,
  rows = 5,
  label,
  id
}) => {
  return (
    <>
      <div className="mb-6 last:mb-0">
        {label && (
          <Label type={LabelType.M} id={id}>
            {label}
          </Label>
        )}
        <textarea
          className={`${classes.textarea} ${classes.textareaHover} ${classes.textareaFocus}`}
          rows={rows}
          placeholder={placeholder}
          id={id}
        ></textarea>
      </div>
    </>
  )
}

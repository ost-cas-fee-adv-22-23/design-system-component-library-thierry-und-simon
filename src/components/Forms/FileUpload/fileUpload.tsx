import React from 'react'
import { Icon, IconType } from '../../Icon/icon'

export const FileUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-l">
      <label
        htmlFor="drop"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-200 border-dashed rounded cursor-pointer bg-slate-100"
      >
        <Icon type={IconType.upload} />
        <span className="text-[24px] text-bold text-slate-500">
          Datei hierhin ziehen...
        </span>
        <span className="text-slate-400">JPEG oder PNG, maximal 50 MB</span>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>

      <label
        className="flex flex-row justify-center w-full bg-slate-300 py-3 mt-4 text-sm text-slate-500 font placeholder:text-slate-500 rounded border border-slate-200 hover:border-slate-300 hover:border-2 focus:border-2 focus:outline-none focus:border-violet-600"
        htmlFor="file-upload"
      >
        <span className="mr-[9px]">...oder Datei auswählen</span>
        <Icon type={IconType.upload} />
      </label>
      <input id="file-upload" className="hidden" type="file" />
    </div>
  )
}

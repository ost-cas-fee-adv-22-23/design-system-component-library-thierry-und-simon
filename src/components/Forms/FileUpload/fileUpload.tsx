import React, { FC } from 'react'
import { Icon, IconType } from '../../Icon/icon'
import { FileUploader } from 'react-drag-drop-files'

export type FileUploadProps = {
  file?: any
  setFile?: any
}

const DragDropContent = function () {
  return (
    <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-200 border-dashed rounded cursor-pointer bg-slate-100">
      <Icon type={IconType.upload} />
      <span className="text-[24px] text-bold text-slate-500">
        Datei hierhin ziehen...
      </span>
      <span className="text-slate-400">JPEG oder PNG, maximal 50 MB</span>
    </div>
  )
}

export const FileUpload: FC<FileUploadProps> = ({ setFile }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FileUploader
        handleChange={setFile}
        classes="w-full"
        name="file"
        types={['JPG', 'PNG']}
        children={<DragDropContent />}
      />

      {/* <label
        className="flex flex-row justify-center w-full bg-slate-300 py-3 mt-4 text-sm text-slate-500 font placeholder:text-slate-500 rounded border  outline outline-transparent outline-2 hover:outline-slate-300 focus:border-2 focus:outline-none focus:outline-violet-600"
        htmlFor="file-upload"
      >
        <span className="mr-[9px]">...oder Datei auswählen</span>
        <Icon type={IconType.upload} />
      </label>
      <input
        id="file-upload"
        className="hidden"
        type="file"
        onChange={(e) => {
          setFile(e?.target?.files[0])
        }}
      /> */}
    </div>
  )
}

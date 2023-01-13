import React, { FC } from "react";
import { Icon, IconType } from "../../Icon/Icon";

export type InputProps = {
  type: "text" | "password" | "email";
  label: string;
  id: string;
  placeholder: string;
};

export const Input: FC<InputProps> = ({ label, type, id, placeholder }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div>
      <label className="block text-slate-700 font-semibold " htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        {type === "password" && (
          <div
            className="absolute flex items-center right-0 inset-y-0 pr-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon type={IconType.views} color="#64748B" />
          </div>
        )}
        <input
          className="w-full bg-slate-50 p-2 text-[20px] text-slate-700 font placeholder:text-slate-500 rounded border border-slate-200 hover:border-slate-300 hover:border-2 focus:border-2 focus:outline-none focus:border-violet-600"
          id={id}
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

import * as React from 'react'
import { SVGProps } from 'react'
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6.018 6.018 0 0 1-6 6Z"
      fill={props.color}
    />
    <path
      d="M11.5 7H9V4.5a1 1 0 1 0-2 0V8a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2Z"
      fill={props.color}
    />
  </svg>
)
export default SvgTime

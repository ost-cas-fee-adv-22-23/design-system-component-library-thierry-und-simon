import * as React from 'react'
import { SVGProps } from 'react'
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM8 8.5a7.008 7.008 0 0 0-7 7 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 7.008 7.008 0 0 0-7-7Z"
      fill={props.color}
    />
  </svg>
)
export default SvgProfile

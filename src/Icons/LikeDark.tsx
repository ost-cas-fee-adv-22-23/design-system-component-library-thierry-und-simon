import * as React from 'react'
import { SVGProps } from 'react'
const SvgLikeDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.6 0C10.1 0 8.8.8 8 2 7.2.8 5.9 0 4.4 0 2 0 0 2 0 4.4c0 4.4 8 10.9 8 10.9s8-6.5 8-10.9C16 2 14 0 11.6 0Z"
      fill={props.color}
    />
  </svg>
)
export default SvgLikeDark

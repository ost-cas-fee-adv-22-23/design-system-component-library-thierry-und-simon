import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.781.375a1.036 1.036 0 0 0-1.562 0l-4 5A1 1 0 0 0 1 7h3v8a1 1 0 0 0 2 0V7h3a1 1 0 0 0 .781-1.625l-4-5Z"
      fill={props.color}
    />
  </svg>
)
export default SvgArrowUp

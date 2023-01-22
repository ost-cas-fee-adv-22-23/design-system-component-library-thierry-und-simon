import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 9H6V1a1 1 0 0 0-2 0v8H1a1 1 0 0 0-.78 1.625l4 5a1 1 0 0 0 1.561 0l4-5A1 1 0 0 0 9.001 9Z"
      fill={props.color}
    />
  </svg>
)
export default SvgArrowDown

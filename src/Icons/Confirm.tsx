import * as React from 'react'
import { SVGProps } from 'react'
const SvgConfirm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.6 8.6 2.753 5.754a.5.5 0 0 0-.707 0L.353 7.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708L13.953.954a.5.5 0 0 0-.707 0L5.6 8.6Z"
      fill={props.color}
    />
  </svg>
)
export default SvgConfirm

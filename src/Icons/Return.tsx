import * as React from 'react'
import { SVGProps } from 'react'
const SvgReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.413.389a.5.5 0 0 0-.849-.235l-1.488 1.559a7.494 7.494 0 1 0 3.062 8.595 1 1 0 0 0-1.9-.616 5.513 5.513 0 1 1-2.573-6.5l-1.6 1.68a.5.5 0 0 0 .27.837L15.157 6.8a.478.478 0 0 0 .31-.04.5.5 0 0 0 .27-.563L14.412.389Z"
      fill="#475569"
    />
  </svg>
)
export default SvgReturn

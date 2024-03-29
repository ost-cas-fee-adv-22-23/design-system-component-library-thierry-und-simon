import * as React from 'react'
import { SVGProps } from 'react'
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 6c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .224.029.44.075.65L4.856 5.661A2.972 2.972 0 0 0 3 5C1.346 5 0 6.346 0 8s1.346 3 3 3c.704 0 1.344-.254 1.856-.661l3.219 2.012A3.009 3.009 0 0 0 8 13c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.704 0-1.343.254-1.856.661L5.925 8.649C5.971 8.44 6 8.223 6 8c0-.224-.029-.44-.075-.649l3.22-2.012A2.97 2.97 0 0 0 11 6Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM3 9a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm8 3a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Z"
      fill={props.color}
    />
  </svg>
)
export default SvgShare

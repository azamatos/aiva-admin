import { SVGProps, FC } from "react";

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    fill="#3EA6FF"
  >
    <g>
      <path d="M20,12h-8v8h-1v-8H3v-1h8V3h1v8h8V12z" />
    </g>
  </svg>
);

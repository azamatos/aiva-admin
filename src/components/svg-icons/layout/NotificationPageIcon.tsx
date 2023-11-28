import { SVGProps, FC } from "react";

export const NotificationPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.id && props.path?.includes(props.id) ? "#ff4e45" : "#909090"}
    >
      <path
        d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
      />
    </g>
  </svg>
);

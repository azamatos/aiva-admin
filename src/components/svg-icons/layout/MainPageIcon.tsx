import { SVGProps, FC } from "react";

export const MainPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g width="24" height="24" viewBox="0 0 24 24">
      {props.id && props.path?.includes(props.id) ? (
        <path
          d="M11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15ZM13 3V9H21V3H13Z"
          fill="aquamarine"
        />
      ) : (
        <path
          d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z"
          fill="#909090"
        />
      )}
    </g>
  </svg>
);

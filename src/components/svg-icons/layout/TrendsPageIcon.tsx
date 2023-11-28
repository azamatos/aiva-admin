import { SVGProps, FC } from "react";

export const TrendsPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
          fill="#ff4e45"
        />
      ) : (
        <path
          d="M16 6L16 8L14 8L14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C12.37 11 12.7 11.11 13 11.28L13 6L16 6ZM18 20L4 20L4 6L3 6L3 21L18 21L18 20ZM21 3L6 3L6 18L21 18L21 3ZM7 4L20 4L20 17L7 17L7 4Z"
          fill="#909090"
        />
      )}
    </g>
  </svg>
);

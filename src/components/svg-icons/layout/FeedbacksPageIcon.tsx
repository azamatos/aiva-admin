import { SVGProps, FC } from "react";

export const FeedbacksPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
          d="M4 2V17H15L20 22V2H4ZM8 11H13V13H8V11ZM8 7H16V9H8V7Z"
          fill="#ff4e45"
        />
      ) : (
        <path
          d="M8 7H16V9H8V7ZM8 13H13V11H8V13ZM5 3V16H15H15.41L15.7 16.29L19 19.59V3H5ZM4 2H20V22L15 17H4V2Z"
          fill="#909090"
        />
      )}
    </g>
  </svg>
);

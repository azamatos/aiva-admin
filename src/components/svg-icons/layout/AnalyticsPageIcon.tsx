import { SVGProps, FC } from "react";

export const AnalyticsPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g width="24" height="24" viewBox="0 0 24 24">
      {props.id && props.path?.includes(props.id) ? (
        <path
          d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V14H17V17Z"
          fill="#ff4e45"
        />
      ) : (
        <path
          d="M9 17H7V10H9V17ZM13 7H11V17H13V7ZM17 14H15V17H17V14ZM20 4H4V20H20V4ZM21 3V21H3V3H21Z"
          fill="#909090"
        />
      )}
    </g>
  </svg>
);

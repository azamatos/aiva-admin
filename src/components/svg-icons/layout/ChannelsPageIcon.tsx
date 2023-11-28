import { SVGProps, FC } from "react";

export const ChannelsPageIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      fill={props.id && props.path?.includes(props.id) ? "#ff4e45" : "#909090"}
    >
      <path d="M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9c4.96,0,9-4.04,9-9S16.96,3,12,3 M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2L12,2z" />
    </g>
  </svg>
);

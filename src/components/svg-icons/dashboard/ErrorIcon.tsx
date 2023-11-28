import { SVGProps, FC } from "react";

const ErrorIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="#FF4E45"
  >
    <g>
      <path d="M13,13h-2V7h2V13z M13,17h-2v-2h2V17z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2S22,6.48,22,12z M21,12 c0-4.96-4.04-9-9-9c-4.96,0-9,4.04-9,9c0,4.96,4.04,9,9,9C16.96,21,21,16.96,21,12z" />
    </g>
  </svg>
);

export default ErrorIcon;

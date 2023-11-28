import { SVGProps, FC } from "react";

export const BurgerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
    </g>
  </svg>
);


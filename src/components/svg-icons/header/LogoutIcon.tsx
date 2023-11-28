import { SVGProps, FC } from "react";

export const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g width="24" height="24" viewBox="0 0 24 24" fill="#909090">
      <path
        d="M20,3v18H8v-1h11V4H8V3H20z
      M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
      />
    </g>
  </svg>
);


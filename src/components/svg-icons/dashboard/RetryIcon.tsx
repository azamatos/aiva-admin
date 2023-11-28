import { FC, SVGProps } from "react";

export const RetryIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      {...props}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"></path>
    </svg>
  );
};

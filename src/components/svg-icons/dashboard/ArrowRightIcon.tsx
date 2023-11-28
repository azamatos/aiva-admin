import { FC, SVGProps } from "react";

export const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m10 17 5-5-5-5v10z"></path>
    </svg>
  );
};

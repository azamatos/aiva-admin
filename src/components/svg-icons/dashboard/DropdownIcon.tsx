import { FC, SVGProps } from "react";

export const DropdownIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7 10 5 5 5-5z"></path>
    </svg>
  );
};

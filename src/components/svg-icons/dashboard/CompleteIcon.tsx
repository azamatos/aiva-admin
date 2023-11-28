import { FC, SVGProps } from "react";

export const CompleteIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#3ea6ff" {...props}>
      <path d="M9,19.4l-5.7-5.7l1.4-1.4L9,16.6L20.3,5.3l1.4,1.4L9,19.4z"></path>
    </svg>
  );
};

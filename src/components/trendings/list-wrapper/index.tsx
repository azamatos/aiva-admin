import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isSelected: boolean;
  title: string;
}

export const TrendingListWrapper: FC<Props> = ({
  children,
  isSelected,
  title,
}) => {
  return (
    <div
      style={{
        minWidth: 500,
        maxWidth: 800,
        backgroundColor: "rgb(40,40,40)",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: isSelected ? "#3ea6ff" : "#aaaaaa1a",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <span
        style={{
          fontSize: 22,
          color: "#3ea6ff",
          fontWeight: 500,
          padding: "8px 0 16px 16px",
          lineHeight: "18px",
          display: "block",
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

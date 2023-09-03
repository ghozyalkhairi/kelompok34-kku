import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const BurgerIcon: FC<Props> = ({
  width = 24,
  height = 24,
  color = "#FFE500",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)">
        <path
          d="M5 10H25"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 20H25"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BurgerIcon;

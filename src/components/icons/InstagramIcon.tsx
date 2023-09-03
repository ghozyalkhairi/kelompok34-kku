import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const InstagramIcon: FC<Props> = ({
  width = 24,
  height = 24,
  color = "#303030",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_113_2)">
        <path
          d="M5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H20C21.3261 5 22.5979 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10V20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25H10C8.67392 25 7.40215 24.4732 6.46447 23.5355C5.52678 22.5979 5 21.3261 5 20V10Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.625 9.375V9.3875"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default InstagramIcon;

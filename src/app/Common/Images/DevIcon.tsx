import React from "react";
import { IconProps } from "../Types/types";

const DevIcon:React.FC<IconProps> = ({ fill = "#737373" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_112_1138)">
        <path
          d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.46094 9.20106C5.46094 9.83975 5.0675 10.8074 3.82225 10.8054H2.25V5.1875H3.85544C5.05638 5.1875 5.46025 6.15375 5.46063 6.79281L5.46094 9.20106ZM3.91138 6.23869C4.04288 6.23869 4.17469 6.28794 4.30613 6.38637C4.43725 6.48481 4.50337 6.63287 4.50362 6.82981V9.19462C4.50362 9.39187 4.438 9.53956 4.3065 9.63806C4.175 9.7365 4.04319 9.78575 3.91169 9.78575H3.32044V6.23869H3.91138Z"
          fill={fill}
        />
        <path
          d="M8.87237 6.19079H7.06699V7.49523H8.17062V8.49923H7.06699V9.80335H8.87274V10.8074H6.76574C6.38762 10.8172 6.07318 10.5177 6.06368 10.1389V5.89098C6.05455 5.51241 6.35374 5.19798 6.73156 5.18848H8.87274L8.87237 6.19079ZM12.3842 10.1052C11.9369 11.1493 11.1356 10.9415 10.7767 10.1052L9.47112 5.18885H10.5747L11.5815 9.04998L12.5834 5.18885H13.6874L12.3842 10.1052Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_112_1138">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DevIcon;

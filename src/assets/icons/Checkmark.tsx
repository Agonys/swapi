import React from "react";
import { IconPropsType } from "./types";

const Checkmark: React.FC<IconPropsType> = (props) => (
  <svg
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.93686 5.77396L1.2898 2.89745L0.5 3.76054L3.93686 7.50013L9.5 1.36322L8.7102 0.500132L3.93686 5.77396Z"
      fill="currentColor"
    />
  </svg>
);

export default Checkmark;

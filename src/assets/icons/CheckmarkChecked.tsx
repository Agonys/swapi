import React from "react";

import { IconPropsType } from "./types";

const CheckmarkChecked: React.FC<IconPropsType> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.25 1.00009H2.75C1.7835 1.00009 1 1.78359 1 2.75009V13.2501C1 14.2166 1.7835 15.0001 2.75 15.0001H13.25C14.2165 15.0001 15 14.2166 15 13.2501V2.75009C15 1.78359 14.2165 1.00009 13.25 1.00009Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.93686 9.77393L4.2898 6.89742L3.5 7.76051L6.93686 11.5001L12.5 5.36319L11.7102 4.5001L6.93686 9.77393Z"
      fill="white"
    />
  </svg>
);

export default CheckmarkChecked;

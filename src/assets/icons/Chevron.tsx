import React from "react";
import { IconPropsType } from "./types";

const Chevron: React.FC<IconPropsType> = (props) => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 12L0.0717975 -1.30507e-06L13.9282 -9.36995e-08L7 12Z" fill="currentColor" />
  </svg>
);

export default Chevron;

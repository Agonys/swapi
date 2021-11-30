import { createGlobalStyle } from "styled-components";
import theme from "./styled-components";

import stardustPattern from "assets/images/stardust_pattern.png";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    background-color: ${theme.colors.backgrounds.normal};
    background-image: url(${stardustPattern});
    font-family: "Ubuntu", sans-serif;
  }
  
  p {
    margin: 0;
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;

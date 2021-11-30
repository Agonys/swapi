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
    color: ${({ theme }) => theme.colors.white};
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.backgrounds.dark};
      border-radius: 7px;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 7px;
    }
  }
  
  p {
    margin: 0;
    font-size: 1.4rem;
  }
  
  div {
    box-sizing: border-box;
  }
  
  #root {
    height: 100vh;
  }
`;

export default GlobalStyle;

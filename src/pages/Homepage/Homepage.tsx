import React from "react";

import { HomepageWrapper } from "./Homepage.styles";
import SearchComponent from "components/SearchComponent/SearchComponent";

const Homepage: React.FC = () => {
  return (
    <HomepageWrapper>
      <SearchComponent />
    </HomepageWrapper>
  );
};

export default Homepage;

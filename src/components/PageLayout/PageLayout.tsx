import React from "react";

import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";

import { PageContainer } from "./PageLayout.styles";

const PageLayout: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <Logo />
      <Navigation />
      {children}
    </PageContainer>
  );
};

export default PageLayout;

import React from "react";
import Routing from "./Routing/Routing";
import PageLayout from "./components/PageLayout/PageLayout";

const App: React.FC = () => {
  return (
    <PageLayout>
      <Routing />
    </PageLayout>
  );
};

export default App;

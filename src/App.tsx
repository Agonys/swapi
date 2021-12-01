import React from "react";
import Routing from "./Routing/Routing";
import PageLayout from "./components/PageLayout/PageLayout";
import useBackgroundTasks from "./hooks/useBackgroundTasks";

const App: React.FC = () => {
  useBackgroundTasks();

  return (
    <PageLayout>
      <Routing />
    </PageLayout>
  );
};

export default App;

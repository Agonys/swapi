import React from "react";
import Routing from "./Routing/Routing";
import PageLayout from "./components/PageLayout/PageLayout";
import useBackgroundTasks from "hooks/useBackgroundTasks";
import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

const App: React.FC = () => {
  useBackgroundTasks();
  const theme = useTheme();

  return (
    <PageLayout>
      <Routing />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme.colors.backgrounds.dark,
            color: theme.colors.white,
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
            fontSize: "1.4rem",
            padding: "20px 15px",
            textAlign: "center",
          },
        }}
      />
    </PageLayout>
  );
};

export default App;

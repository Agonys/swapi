import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "config/styles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import theme from "./config/styled-components";
import { store } from "store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root"),
);

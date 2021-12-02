import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SERVER_BASE_URL } from "../config/constants";

export const client = new ApolloClient({
  uri: SERVER_BASE_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

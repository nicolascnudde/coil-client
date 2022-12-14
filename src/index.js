import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// initialize the Apollo client
const client = new ApolloClient({
  uri: "https://farmers-without-borders-server.onrender.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

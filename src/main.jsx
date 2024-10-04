import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

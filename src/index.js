import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
   <Auth0Provider
        domain="daraj.us.auth0.com"
        clientId="DKZcRvw2mP81bjxN3cD1bplJ4nh7u3R0"
        redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

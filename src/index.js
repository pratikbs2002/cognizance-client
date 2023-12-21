import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId = process.env.REACT_APP_GAUTH_CLIENT_ID;

if (process.env.REACT_APP_MODE === "dev") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
}

root.render(
    <GoogleOAuthProvider clientId={clientId}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </GoogleOAuthProvider>
);

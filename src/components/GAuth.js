import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../service/authService";

export default function GAuth({ setIsLogin }) {
    const loginRequest = async () => {
        let response = await login();
        console.log(response);
    };

    return (
        <>
            <GoogleLogin
                auto_select={false}
                onSuccess={async (credentialResponse) => {
                    console.log(credentialResponse);
                    sessionStorage.setItem(
                        "token",
                        credentialResponse.credential
                    );
                    setIsLogin(true);
                    loginRequest(credentialResponse.credential);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </>
    );
}

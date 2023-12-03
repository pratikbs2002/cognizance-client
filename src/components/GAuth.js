import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../service/authService";

export default function GAuth({ setIsLogin }) {
    const loginRequest = async (token) => {
        sessionStorage.setItem("token", token);
        let response = await login();
        console.log(response);
        if (response?.isAuthenticated) {
            setIsLogin(true);
        } else {
            console.log(response.message);
            setIsLogin(false);
            sessionStorage.removeItem("token");
        }
    };

    return (
        <>
            <GoogleLogin
                auto_select={false}
                onSuccess={async (credentialResponse) => {
                    console.log(credentialResponse);
                    await loginRequest(credentialResponse.credential);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </>
    );
}

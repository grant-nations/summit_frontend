import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/LoginButton.css";

/**
 * A login button that redirects to the elections page after authorization
 * @returns {JSX.Element}
 * @constructor
 */
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            className="login-btn"
            onClick={() => loginWithRedirect({
                redirectUri: "http://localhost:3000"
            })}
        >
            Log in
        </button>
    );
};

export default LoginButton;
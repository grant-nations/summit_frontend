import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/SignupButton.css";

/**
 * A signup button that redirects to the Elections view after authentication
 * @returns {JSX.Element}
 * @constructor
 */
const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="signup-btn"
            onClick={() =>
                loginWithRedirect({
                    screen_hint: "signup",
                    redirectUri: "http://localhost:3000"
                })
            }
        >
            Sign up
        </button>
    );
};

export default SignupButton;
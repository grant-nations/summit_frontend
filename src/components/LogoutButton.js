import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/LoginButton.css";

/**
 * A button that logs the user out and returns to the landing page.
 * @returns {JSX.Element}
 * @constructor
 */
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button
            className="login-btn"
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
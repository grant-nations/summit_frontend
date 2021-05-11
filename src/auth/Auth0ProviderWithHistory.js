import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

/**
 * A browser history wrapper that incorporates Auth0 authentication
 * @param children The children components within the wrapper
 * @returns {JSX.Element}
 * @constructor
 */
const Auth0ProviderWithHistory = ({ children }) => {

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}
            scope="read:current_user update:current_user_metadata"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
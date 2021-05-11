import React from "react";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../components/Loading";

/**
 * A "dummy" component that is passed into the ProtectedRoute component
 * to render a protected component/route.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function AuthenticatedComponent(props) {
    return <props.component {...props} />
}

export default withAuthenticationRequired(AuthenticatedComponent, {
    onRedirecting: () => (<Loading />)
});
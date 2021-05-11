import React from "react";
import {Route} from "react-router-dom";
import AuthenticatedComponent from "./AuthenticatedComponent";

/**
 * A protected Route that implements functionality from react-router-dom
 * @param ComponentToRender The JSX functional component that will be rendered as a protected component
 * @param path The path of the protected route
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const ProtectedRoute = ({component: ComponentToRender, path, ...rest}) => {
    return <Route
        {...rest}
        path={path}
        render={(props) => {
            return <AuthenticatedComponent component={ComponentToRender} {...props}/>
        }}
    />
}

export default ProtectedRoute;
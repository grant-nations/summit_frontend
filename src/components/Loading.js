import React from "react";
import "../css/Loading.css";

/**
 * A loading spinner in the center of the page.
 * @returns {JSX.Element}
 * @constructor
 */
function Loading() {
    return <div className={"center"}>
        <div className={"spinner"} />
    </div>
}

export default Loading;
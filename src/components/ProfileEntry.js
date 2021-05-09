import React from "react";
import "../css/ProfileEntry.css";

function ProfileEntry({name, attempts}){
    return <li className={"profile-entry"}>
        <div>
            <p className={"profile-entry-name"}>{name}</p>
        </div>
        <div>
            <p className={"attempts-text"}>{attempts} {attempts > 1 ? "attempts" : "attempt"}</p>
        </div>
    </li>
}

export default ProfileEntry;
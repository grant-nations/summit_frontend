import React from "react";
import "../css/Profile.css";
import ProfileEntry from "../components/ProfileEntry";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle as plus} from "@fortawesome/free-solid-svg-icons";

const climbList = [
    {name: "Climb 1", attempts: 1},
    {name: "Climb 2", attempts: 2},
    {name: "Climb 3", attempts: 3},
    {name: "Climb 4", attempts: 4},
    {name: "Climb 5", attempts: 5},
    {name: "Climb 6", attempts: 6},
]

function Profile(){

    function handleClick(){

    }

    return <div>
        <div className={"plus-button-container"}>
            <button
                className={"plus-button"}
                onClick={handleClick}
            >
                <FontAwesomeIcon
                    icon={plus}
                    size={"2x"}
                    className={"plus-icon"}
                />
            </button>
        </div>
        <div className={"profile-list-box"}>
            {climbList.map((climb, index) =>{
                return <ProfileEntry
                    key={index}
                    name={climb.name}
                    attempts={climb.attempts}
                />
            })
            }
        </div>
    </div>
}

export default Profile;
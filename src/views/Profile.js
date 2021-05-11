import React, {useEffect, useState} from "react";
import "../css/Profile.css";
import ProfileEntry from "../components/ProfileEntry";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle as plus} from "@fortawesome/free-solid-svg-icons";
import AddClimbBox from "../components/AddClimbBox";

const climbList = [
    {name: "Climb 1", attempts: 1},
    {name: "Climb 2", attempts: 2},
    {name: "Climb 3", attempts: 3},
    {name: "Climb 4", attempts: 4},
    {name: "Climb 5", attempts: 5},
    {name: "Climb 6", attempts: 6},
]

function Profile() {
    const [listItems, setListItems] = useState([])
    const [addItem, setAddItem] = useState(true);

    // const [loading, setLoading] = useState(true);

    function add() {
        setAddItem(true);
    }

    useEffect(() => {
        // PERFORM AXIOS CALL HERE
        setListItems(climbList);
    }, [])

    return <div>
        {addItem && <AddClimbBox/>}
        <div className={addItem ? "blur-container" : ""}>
            <div className={"plus-button-container"}>
                <button
                    className={"plus-button"}
                    onClick={add}
                >
                    <FontAwesomeIcon
                        icon={plus}
                        size={"2x"}
                        className={"plus-icon"}
                    />
                </button>
            </div>
            <div className={"profile-list-box"}>
                {listItems.map((climb, index) => {
                    return <ProfileEntry
                        key={index}
                        name={climb.name}
                        attempts={climb.attempts}
                    />
                })
                }
            </div>
        </div>
    </div>
}

export default Profile;
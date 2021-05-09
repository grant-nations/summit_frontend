import React, {useState} from "react";
import "../css/Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy as trophy} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle as profile} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

/**
 * This is the header component that contains the leaderboard and profile icons.
 * @returns {JSX.Element}
 * @constructor
 */
function Header() {

    const [onProfile, setOnProfile] = useState(true);

    return <header className={"header"}>
        <Link
        to={"/leaderboard"}
        className={"header-link"}
        >
            <FontAwesomeIcon
                className={`header-icon ${!onProfile && "link-active"}`}
                onClick={()=> setOnProfile(false)}
                icon={trophy}
                size={"2x"}
            />
        </Link>
        <Link
        to={"/profile"}
        className={"header-link"}
        >
            <FontAwesomeIcon
                className={`header-icon ${onProfile && "link-active"}`}
                onClick={()=> setOnProfile(true)}
                icon={profile}
                size={"2x"}
            />
        </Link>
    </header>
}

export default Header;
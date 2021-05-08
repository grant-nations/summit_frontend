import React from "react";
import "../css/Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrophy as trophy } from '@fortawesome/free-solid-svg-icons';


/**
 * This is the header component that contains the leaderboard and profile icons.
 * @returns {JSX.Element}
 * @constructor
 */
function Header(){
    return <header className={"header"}>
            <FontAwesomeIcon
                icon={trophy}
            />
            <FontAwesomeIcon
                icon={trophy}
            />
    </header>
}

export default Header;
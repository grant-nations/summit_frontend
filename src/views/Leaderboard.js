import React from "react";
import "../css/Leaderboard.css";
import {NavLink, Route} from "react-router-dom";
import WomenLeaderboard from "../components/WomenLeaderboard";
import MenLeaderboard from "../components/MenLeaderboard";

function Leaderboard() {
    return <div className={"leaderboard-view"}>
        <div className={"men-women-toggle-box"}>
            <NavLink
                to={"/leaderboard/men"}
                className={"leaderboard-button"}
                activeClassName={"leaderboard-button-active"}
            >
                Men
            </NavLink>
            <NavLink
            to={"/leaderboard/women"}
            className={"leaderboard-button"}
            activeClassName={"leaderboard-button-active"}
            >
                Women
            </NavLink>
        </div>
        <div className={"leaderboard-list-container"}>
            <Route strict path={"/leaderboard/men"} component={MenLeaderboard}/>
            <Route strict path={"/leaderboard/women"} component={WomenLeaderboard}/>
        </div>
    </div>
}

export default Leaderboard;
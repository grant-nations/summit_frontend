import React from "react";
import "../css/LeaderboardEntry.css";

function LeaderboardEntry({place, name, score}) {
    return <li className={"leaderboard-entry"}>
        <div>
            <p className={"entry-text"}>{place}. {name}</p>
        </div>
        <div>
            <p className={"entry-text"}>{score}</p>
        </div>
    </li>
}

export default LeaderboardEntry;
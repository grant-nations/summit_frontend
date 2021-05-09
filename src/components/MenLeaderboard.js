import React from "react";
import LeaderboardEntry from "./LeaderboardEntry";
import "../css/MenWomenLeaderboard.css";

const names = [
    {name: "Grant Nations", score: "1"},
    {name: "Jan Cas", score: "2"},
    {name: "Erlich Bachman", score: "3"},
    {name: "Barack Obama", score: "4"},
];


function MenLeaderboard(){
    return <div>
        <ul className={"leaderboard-list"}>
            {names.map((item, index) => {
                return <LeaderboardEntry
                    key={index}
                    place={index + 1}
                    name={item.name}
                    score={item.score}
                />
            })}
        </ul>
    </div>
}

export default MenLeaderboard;
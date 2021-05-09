import React from "react";
import LeaderboardEntry from "./LeaderboardEntry";
import "../css/MenWomenLeaderboard.css";

const names = [
    {name: "Dalen Hinderaker", score: "1"},
    {name: "Taylor Alicea-Jorgensen", score: "2"},
    {name: "Ana de Armas", score: "3"},
    {name: "Hayley Williams", score: "4"},
];


function WomenLeaderboard(){
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

export default WomenLeaderboard;
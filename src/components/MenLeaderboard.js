import React, {useEffect, useState} from "react";
import LeaderboardEntry from "./LeaderboardEntry";
import "../css/MenWomenLeaderboard.css";
import useAxios from "../hooks/axios_config";
import axios from "axios";

const names = [
    {name: "Grant Nations", score: "1"},
    {name: "Jan Cas", score: "2"},
    {name: "Erlich Bachman", score: "3"},
    {name: "Barack Obama", score: "4"},
];


function MenLeaderboard() {

    const axiosCustom = useAxios();
    const token = axiosCustom.defaults.headers['Authorization'];

    const [climbers, setClimbers] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        axiosCustom.get("http://3.141.18.221/get_leaderboard_male/", {
            cancelToken: source.token
        }).then((response) => {
            console.log(response.data)
        }).catch(function (err){
            if (axios.isCancel(err)) {
                console.log("Request cancelled", err.message);
            } else {
                console.log(err);
            }
        });
        return () => {
            source.cancel();
        }
    }, [token])

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
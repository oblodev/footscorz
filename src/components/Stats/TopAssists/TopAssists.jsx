import "./TopAssists.css";
import { useState, useEffect } from "react";
import axios from "axios";

function TopAssists({ statsLeague }) {
  const [topAssists, getTopAssists] = useState("");
  const [topAssistsStats, getTopAssistsStats] = useState(0);
  const [teamName, getTeamName] = useState("");
  const [topAssistsGoals, getTopAssistsGoals] = useState(0);
  const [topAssistsAcc, getTopAssistsAcc] = useState(0);

  // Fetch Stats Data
  useEffect(() => {
    const fetchAssistsData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/players/topassists?league=${statsLeague}&season=2021`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "d666477e1588ccd20d44cc3abb5d29c4",
          },
        }
      ).catch((err) => {
        // Handle Error Here
        console.log(err);
      });

      getTopAssists(result.data.response[0].player);
      getTopAssistsStats(result.data.response[0].statistics[0].goals.assists);
      getTeamName(result.data.response[0].statistics[0].team.name);
      getTopAssistsStats(result.data.response[0].statistics[0].goals.assists);
      getTopAssistsGoals(result.data.response[0].statistics[0].goals.total);
      getTopAssistsAcc(result.data.response[0].statistics[0].passes.accuracy);
    };
    fetchAssistsData();
  }, [statsLeague]);

  return (
    <div className="assists-stats">
      <div className="scorer-header">
        <h2>Top Assists</h2>
      </div>
      <div className="scorer-info">
        <div className="scorer-img">
          <img src={topAssists.photo} alt="Player image" />
        </div>
        <div className="scorer-data">
          <div className="name">
            <p className="blue">{topAssists.name}</p>
            <p className="club">{teamName}</p>
          </div>
          <div className="stats-info">
            <div className="goals">
              <p>Assists</p>
              <p>{topAssistsStats}</p>
            </div>
            <div className="assists">
              <p>Goals</p>
              <p>{topAssistsGoals}</p>
            </div>
            <div className="rating">
              <p>Pass Acc.</p>
              <p>{topAssistsAcc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopAssists;

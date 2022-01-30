import "./TopScorer.css";
import { useState, useEffect } from "react";
import axios from "axios";

function TopScorer({ statsLeague }) {
  const [topScorer, getTopScorer] = useState("");
  const [topScorerStats, getTopScorerStats] = useState(0);
  const [topScorerAssists, getTopScorerAssists] = useState(0);
  const [topScorerGames, getTopScorerGames] = useState(0);
  const [teamName, getTeamName] = useState("");
  const [LeagueName, getLeagueName] = useState("");

  // Fetch Stats Data
  useEffect(() => {
    const fetchStatsData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/players/topscorers?league=${statsLeague}&season=2021`,
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
      console.log(result.data.response[0].statistics[0]);
      getLeagueName(result.data.response[0].statistics[0].league.name);
      getTopScorer(result.data.response[0].player);
      getTeamName(result.data.response[0].statistics[0].team.name);
      getTopScorerStats(result.data.response[0].statistics[0].goals.total);
      getTopScorerAssists(result.data.response[0].statistics[0].goals.assists);
      getTopScorerGames(
        result.data.response[0].statistics[0].games.appearences
      );
    };
    fetchStatsData();
  }, [statsLeague]);

  return (
    <div className="scorer-stats">
      <div className="scorer-header">
        <h2>Top Scorer</h2>
      </div>
      <div className="scorer-info">
        <div className="scorer-img">
          <img src={topScorer.photo} alt="" />
        </div>
        <div className="scorer-data">
          <div className="name">
            <p className="blue">{topScorer.name}</p>
            <p className="club">{teamName}</p>
          </div>
          <div className="stats-info">
            <div className="goals">
              <p>Goals</p>
              <p>{topScorerStats}</p>
            </div>
            <div className="assists">
              <p>Assists</p>
              <p>{topScorerAssists}</p>
            </div>
            <div className="rating">
              <p>Games</p>
              <p>{topScorerGames}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopScorer;

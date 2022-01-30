import "./StatsHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";

function StatsHeader({ statsLeague }) {
  const [leagueHeaderName, getLeagueHeaderName] = useState("");
  const [leagueLogo, getLeagueLogo] = useState("");
  const [leagueLand, getLeagueLand] = useState("");

  // Fetch Stats Data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/leagues?id=${statsLeague}&season=2021`,
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

      console.log(result.data.response[0]);
      getLeagueHeaderName(result.data.response[0].league.name);
      getLeagueLand(result.data.response[0].country.name);
      getLeagueLogo(result.data.response[0].league.logo);
    };
    fetchData();
  }, [statsLeague]);

  return (
    <div className="info-header">
      <div className="info-icon">
        <img src={leagueLogo} alt="league logo" className="league-logo" />
      </div>
      <div className="info-text">
        <h2 className="blue">{leagueHeaderName}</h2>
        <p>{leagueLand}</p>
      </div>
    </div>
  );
}

export default StatsHeader;

import "./LeagueHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";

function LeagueHeader({ league, monthNameLong }) {
  const [leagueHeaderName, getLeagueHeaderName] = useState("");
  const [leagueLogo, getLeagueLogo] = useState("");
  const [leagueLand, getLeagueLand] = useState("");
  // Get todays date
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  let dayName = weekday[current.getDay()];

  // Fetch Stats Data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/leagues?id=${league}&season=2021`,
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
  }, [league]);

  return (
    <div className="info-header">
      <div className="info-icon">
        <img src={leagueLogo} alt="league logo" className="league-logo" />
      </div>
      <div className="info-bar">
        <div className="info-text">
          <h2 className="blue">{leagueHeaderName}</h2>
          <p>{leagueLand}</p>
        </div>
        <div className="fixtures-date">
          <div className="today">
            <h3 className="blue">{dayName}</h3>
            <h3>
              {current.getDate()} {monthNameLong} {current.getFullYear()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeagueHeader;

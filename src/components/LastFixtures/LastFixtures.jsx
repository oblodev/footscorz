import "./LastFixtures.css";
import axios from "axios";
import { useState, useEffect } from "react";

function LastFixtures({ league, lastGames }) {
  const [lastFixturesData, getLastFixturesData] = useState([]);

  const current = new Date();

  // Fetch Fixtures Data
  useEffect(() => {
    const fetchFixturesData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/fixtures?&league=${league}&season=${
          current.getFullYear() - 1
        }&last=${lastGames}&timezone=Europe/Vienna`,
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
      //console.log(result.data.response);
      getLastFixturesData(result.data.response);
    };
    fetchFixturesData();
  }, [league, lastGames]);
  return (
    <>
      {lastFixturesData.length > 0 ? (
        lastFixturesData.map((fixture) => (
          <tr key={fixture.fixture.id}>
            <td className="orange match-time">
              {fixture.fixture.status.short === "NS"
                ? fixture.fixture.date.split("T")[1].slice(0, 5)
                : fixture.fixture.status.short}
            </td>
            <td className="align">
              <img
                src={fixture.teams.home.logo}
                alt="home-team-logo"
                className="team-logo"
              />
              <span className="home">{fixture.teams.home.name}</span>
            </td>
            <td>
              {fixture.goals.home ? fixture.goals.home : "0"} :{" "}
              {fixture.goals.away ? fixture.goals.away : "0"}{" "}
            </td>
            <td className="align">
              <img
                src={fixture.teams.away.logo}
                alt="away-team-logo"
                className="team-logo"
              />
              <span className="away">{fixture.teams.away.name}</span>
            </td>
          </tr>
        ))
      ) : (
        <div>No fixtures</div>
      )}
    </>
  );
}

export default LastFixtures;

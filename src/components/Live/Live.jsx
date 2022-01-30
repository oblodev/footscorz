import "./Live.css";
import axios from "axios";
import { useState, useEffect } from "react";
import LastFixtures from "../LastFixtures/LastFixtures";
import LeagueHeader from "./LeagueHeader/LeagueHeader";

function Live() {
  const [fixturesData, getFixturesData] = useState([]);
  const [league, setLeague] = useState("39");
  const [headerData, setHeaderData] = useState("");
  const [lastGames, setLastGames] = useState("10");

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
  const monthNameLong = current.toLocaleString("en-US", { month: "long" });
  function month2digits(month) {
    return (month < 10 ? "0" : "") + month;
  }
  const month2digits1 = month2digits(current.getMonth() + 1);
  const date = `${current.getFullYear()}-${month2digits1}-${current.getDate()}`;

  // Fetch Fixtures Data
  useEffect(() => {
    const fetchFixturesData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/fixtures?date=${date}&league=${league}&season=${
          current.getFullYear() - 1
        }&timezone=Europe/Vienna`,
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

      console.log(typeof result.data.response);

      getFixturesData(result.data.response);
      setHeaderData(result.data.response[0].league);
    };
    fetchFixturesData();
  }, [league]);

  return (
    <div className="container">
      <div className="live">
        <div className="first-col">
          <div className="inner-col">
            <ul>
              <li className="heading-li">Leagues</li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    setLeague("39");
                    setLastGames("10");
                  }}
                >
                  England
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    setLeague("140");
                    setLastGames("10");
                  }}
                >
                  Spain
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    setLeague("135");
                    setLastGames("10");
                  }}
                >
                  Italy
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    setLeague("78");
                    setLastGames("8");
                  }}
                >
                  Germany
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    setLeague("61");
                    setLastGames("10");
                  }}
                >
                  France
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-live-col">
          <div className="inner-col">
            {fixturesData.length > 0 ? (
              <div className="info-header">
                <div className="info-icon">
                  <img
                    src={headerData.logo}
                    alt="league logo"
                    className="league-logo"
                  />
                </div>
                <div className="info-bar">
                  <div className="info-text">
                    <h2 className="blue">{headerData.name}</h2>
                    <p>{headerData.country}</p>
                  </div>
                  <div className="fixtures-date">
                    <div className="today">
                      <h3 className="blue">{dayName}</h3>
                      <h3>
                        {current.getDate()} {monthNameLong}{" "}
                        {current.getFullYear()}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <LeagueHeader league={league} monthNameLong={monthNameLong} />
            )}

            <div className="fixtures">
              <div className="fixtures-data">
                {fixturesData.length > 0 ? (
                  <div className="table-header">
                    <h4>Livescores</h4>
                  </div>
                ) : (
                  <div className="table-header">
                    <h4>Last Fixtures</h4>
                  </div>
                )}
                <div className="table-wrap">
                  <table className="table border">
                    <thead>
                      <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Home</th>
                        <th scope="col">Results</th>
                        <th scope="col">Away</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fixturesData.length > 0 ? (
                        fixturesData.map((fixture) => (
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
                              <span className="home">
                                {fixture.teams.home.name}
                              </span>
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
                              <span className="away">
                                {fixture.teams.away.name}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <LastFixtures league={league} lastGames={lastGames} />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;

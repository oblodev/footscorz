import "./Standings.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Standings({ league }) {
  const [leagueData, setLeagueData] = useState([]);
  const [leagueHeaderData, setLeagueHeaderData] = useState("");

  // Fetch League Data
  useEffect(() => {
    const fetchLeagueData = async () => {
      const result = await axios(
        `https://v3.football.api-sports.io/standings?season=2021&league=${league}`,
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
      //console.log(result.data.response[0].league);
      setLeagueData(result.data.response[0].league.standings[0]);
      setLeagueHeaderData(result.data.response[0].league);
    };
    fetchLeagueData();
  }, [league]);

  return (
    <div>
      <div className="info-header">
        <div className="info-icon">
          <img
            src={leagueHeaderData.logo}
            alt="league logo"
            className="league-logo"
          />
        </div>
        <div className="info-text">
          <h2 className="blue">{leagueHeaderData.name}</h2>
          <p>{leagueHeaderData.country}</p>
        </div>
      </div>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Position">Pos</abbr>
              </th>
              <th>Team</th>
              <th>
                <abbr title="Played">Pld</abbr>
              </th>
              <th>
                <abbr title="Won">W</abbr>
              </th>
              <th>
                <abbr title="Drawn">D</abbr>
              </th>
              <th>
                <abbr title="Lost">L</abbr>
              </th>
              <th>
                <abbr title="Goals for">GF</abbr>
              </th>
              <th>
                <abbr title="Goals against">GA</abbr>
              </th>
              <th>
                <abbr title="Goal difference">GD</abbr>
              </th>
              <th>
                <abbr title="Points">Pts</abbr>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Position">Pos</abbr>
              </th>
              <th>Team</th>
              <th>
                <abbr title="Played">Pld</abbr>
              </th>
              <th>
                <abbr title="Won">W</abbr>
              </th>
              <th>
                <abbr title="Drawn">D</abbr>
              </th>
              <th>
                <abbr title="Lost">L</abbr>
              </th>
              <th>
                <abbr title="Goals for">GF</abbr>
              </th>
              <th>
                <abbr title="Goals against">GA</abbr>
              </th>
              <th>
                <abbr title="Goal difference">GD</abbr>
              </th>
              <th>
                <abbr title="Points">Pts</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            {leagueData &&
              leagueData.map((standing) => (
                <tr key={standing.rank}>
                  <th>{standing.rank}</th>
                  <td className="align-team">
                    <img
                      src={standing.team.logo}
                      alt="team logo"
                      className="team-logo"
                    />
                    <span className="team-name">{standing.team.name} </span>
                    <strong></strong>
                  </td>
                  <td>{standing.all.played}</td>
                  <td>{standing.all.win}</td>
                  <td>{standing.all.draw}</td>
                  <td>{standing.all.lose}</td>
                  <td>{standing.all.goals.for}</td>
                  <td>{standing.all.goals.against}</td>
                  <td>{standing.goalsDiff}</td>
                  <td>{standing.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Standings;

import "./Stats.css";
import { useState } from "react";
import TopScorer from "./TopScorer/TopScorer";
import TopAssists from "./TopAssists/TopAssists";
import StatsHeader from "./StatsHeader/StatsHeader";

function Stats() {
  const [statsLeague, getStatsLeague] = useState("39");

  return (
    <div className="container">
      <div className="stats">
        <div className="first-col">
          <div className="inner-col">
            <ul>
              <li className="heading-li">Leagues</li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    getStatsLeague("39");
                  }}
                >
                  England
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    getStatsLeague("140");
                  }}
                >
                  Spain
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    getStatsLeague("135");
                  }}
                >
                  Italy
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    getStatsLeague("78");
                  }}
                >
                  Germany
                </span>
              </li>
              <li>
                <span
                  className="league"
                  onClick={() => {
                    getStatsLeague("61");
                  }}
                >
                  France
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-col">
          <div className="inner-col">
            <StatsHeader statsLeague={statsLeague} />
            <TopScorer statsLeague={statsLeague} />
          </div>
          <div className="inner-col">
            <TopAssists statsLeague={statsLeague} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;

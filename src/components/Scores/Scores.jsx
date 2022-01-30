import "./Scores.css";
import { useState } from "react";
import Standings from "../Standings/Standings";

function Scores() {
  const [league, setLeague] = useState("39");
  return (
    <div>
      <div className="container">
        <div className="scores-wrap">
          <div className="first-col">
            <div className="inner-col">
              <ul>
                <li className="heading-li">Leagues</li>
                <li>
                  <span
                    className="league"
                    onClick={() => {
                      setLeague("39");
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
              <Standings league={league} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scores;

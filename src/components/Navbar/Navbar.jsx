import "./Navbar.css";
import { BiFootball } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [activeStandings, setActiveStandings] = useState(true);
  const [activeLive, setActiveLive] = useState(false);
  const [activeStats, setActiveStats] = useState(false);
  return (
    <div className="container mt-40">
      <nav
        className="navbar bor-b"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-m ">
          <div className="navbar-1">
            <Link to="/">
              <a
                className={
                  activeStandings ? "navbar-item active" : "navbar-item"
                }
                onClick={() => {
                  setActiveStandings(true);
                  setActiveLive(false);
                  setActiveStats(false);
                }}
              >
                <BiFootball className="icon-nav" />
                Standings
              </a>
            </Link>
            <Link to="live">
              <a
                className={activeLive ? "navbar-item active" : "navbar-item"}
                onClick={() => {
                  setActiveLive(true);
                  setActiveStandings(false);
                  setActiveStats(false);
                }}
              >
                <MdOutlineLiveTv className="icon-nav" />
                Live
              </a>
            </Link>
            <div className="navbar-end">
              <Link to="stats">
                <a
                  className={activeStats ? "navbar-item active" : "navbar-item"}
                  onClick={() => {
                    setActiveLive(false);
                    setActiveStandings(false);
                    setActiveStats(true);
                  }}
                >
                  <IoIosStats className="icon-nav" />
                  Stats
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

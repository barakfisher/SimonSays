import React, { useContext, useEffect } from "react";
import "../../css/sidePanel.css";
import AppContext from "../../context/app/appContext";

const SidePanel = () => {
  const appContext = useContext(AppContext);
  const { user, leaderBord, setLeaderBord } = appContext;
  useEffect(() => {
    let _leaderBord = localStorage.getItem("leader_bord");
    _leaderBord = _leaderBord ? JSON.parse(_leaderBord) : [];
    setLeaderBord(_leaderBord);
  }, []);
  return (
    <div className="side-panel">
    
      <div className="high-scores">
        <div className="title" >Top Scores:</div>
        <ol>
          {leaderBord.map(({time,name,score}) => (
            <li>
              <div className="name">{name}</div>
              <div className="score">Scored {score} Points</div>
              <div className="date">On {time}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SidePanel;

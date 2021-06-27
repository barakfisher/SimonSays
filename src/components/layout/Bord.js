import "../../css/bord.css";
import React, { useEffect, useState, useContext, Fragment } from "react";
import GameBtn from "./GameBtn";
import AppContext from "../../context/app/appContext";
const BLINK_PERIOD = 300;

const Bord = () => {
  const appContext = useContext(AppContext);

  const {
    sequenceArr,
    setSequenceArr,
    userSequenceArr,
    setUserSequenceArr,
    currentPressed,
    setCurrentPressed,
    setCurrentScore,
    currentScore,
    isGameOver,
    setIsGameOver,
    user,
    setLeaderBord
  } = appContext;

  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [isBord, setIsBord] = useState(false);

  // Generate random btn
  const getRandomBtn = () => parseInt(Math.random(0, 1) * 6) + 1;

  //Show currentSequence
  const showClicks = async () => {
    const len = sequenceArr.length;
    let i = 0;
    setIsPlayingSequence(true);
    while (i <= len) {
      setCurrentPressed(-1);
      await delay(BLINK_PERIOD);
      await showClick(sequenceArr[i]);
      i++;
    }
    setCurrentPressed(-1);
    setIsPlayingSequence(false);
  };

  // Show single click
  const showClick = (btnIndex) => {
    return new Promise(async (resolve, reject) => {
      setCurrentPressed(btnIndex);
      await delay(BLINK_PERIOD);
      setCurrentPressed(-1);
       resolve();
    });
  };

  // Add item to sequenceArr
  const showNextSequance = () => {
    setSequenceArr([...sequenceArr, getRandomBtn()]);
  };

  // Will trigger on each user game-btn click to check if next sequence is required
  useEffect(() => {
    if (userSequenceArr.length === sequenceArr.length && isBord) {
      delay(BLINK_PERIOD).then(()=>{
        setCurrentPressed(-1);
        delay(BLINK_PERIOD).then(()=>{
          showNextSequance();
          setUserSequenceArr([]);  
        })
      })
    }
   // eslint-disable-next-line 
  }, [userSequenceArr]);

  // Will trigger on each sequenceArr change
  useEffect(() => {
    showClicks();
    // eslint-disable-next-line 
  }, [sequenceArr]);

  // Create artificial delay for ui
  const delay = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  // Create user score object to high-scores list
  const createScoreObj = () => {
    const time = new Date()
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("/");
    const score = currentScore;
    const name = user;
    return { time, score, name };
  };

  // Save score to local storage
  const saveScore = () => {
    let leaderBord = localStorage.getItem("leader_bord");
    const score = createScoreObj();
    if (leaderBord) {
      leaderBord = JSON.parse(leaderBord);
      leaderBord.push(score);
      leaderBord.sort((a, b) => b.score - a.score);
      localStorage.setItem("leader_bord", JSON.stringify(leaderBord));
      setLeaderBord(leaderBord);
    } else {
      setLeaderBord([score]);
      localStorage.setItem("leader_bord", JSON.stringify([score]));
    }
  };

  // Will trigger when user enters a wrong sequence (game over)
  useEffect(() => {
    if (isGameOver) {
      alert(`GAME OVER\nYou Scored ${currentScore} Points`);
      saveScore();
      setCurrentPressed(-1);
      setSequenceArr([]);
      setUserSequenceArr([]);
      setCurrentScore(0);
      setIsBord(false);
      setIsGameOver(false);
    }
// eslint-disable-next-line 
  }, [isGameOver]);

  // Will trigger on PLAY btn click
  useEffect(() => {
    if (isBord) {
      setTimeout(() => {
        if (sequenceArr.length === 0) {
          showNextSequance();
        }
      }, 500);
    }
    // eslint-disable-next-line 
  }, [isBord]);

  // Buttons arr
  const buttonsArr = [
    { id: 1, color: "purple" },
    { id: 2, color: "blue" },
    { id: 3, color: "red" },
    { id: 4, color: "black" },
    { id: 5, color: "yellow" },
    { id: 6, color: "pink" },
  ];
  
  return (
    <div className="bord-container main-container">
        <div style={{ position: "absolute", top: "16px","textAlign": "center" }}>
            <div className="greeting">Welcome {user}</div>
            <div className="score">Current Score: {currentScore}</div>
          </div>
      {isBord ? (
        <Fragment>
        

          {isPlayingSequence && <div className="overlay"></div>}
          <div className="bord">
            {buttonsArr.map(({ color, id }) => {
              const isActive = currentPressed === id;
              return (
                <GameBtn id={id} activeColor={color} isActive={isActive} key={`btn-${id}`}/>
              );
            })}
          </div>
        </Fragment>
      ) : (
        <button
        className="play-btn"
          onClick={() => {
            setIsBord(true);
          }}
        >
          <div className="text">PLAY</div>
        </button>
      )}
    </div>
  );
};
export default Bord;

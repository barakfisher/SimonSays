import React,{useContext} from "react";
import PropTypes from "prop-types";
import "../../css/btn.css";
import AppContext from "../../context/app/appContext";

const GameBtn = ({ id, activeColor, isActive }) => {
  const appContext = useContext(AppContext)
  const {sequenceArr, userSequenceArr, setUserSequenceArr,setCurrentPressed,
    setCurrentScore, currentScore,setIsGameOver} = appContext;
  
  const btnFillStyle = {
    background: activeColor,
  };

  const isCorrectSequence = ({currentBtnId,currentClickIndex}) =>{
    if(currentBtnId ===  sequenceArr[currentClickIndex]){
      return true;
    }
    return false;
  }

  const handleGameBtnClick = (currentBtnId) => {
    setCurrentPressed(currentBtnId);
      if(isCorrectSequence({currentBtnId,currentClickIndex:userSequenceArr.length})){
        const _currentScore = currentScore+10;
        setCurrentScore(_currentScore);
        setUserSequenceArr([...userSequenceArr, id]);
      }else{      
        setIsGameOver(true);
      }
  };

  return (
    <button
      className="game-btn"
      style={isActive ? btnFillStyle : {}}
      onClick={() => {
        handleGameBtnClick(id);
      }}
    >
      <div className="btn-title"> {id}</div>
    </button>
  );
};

GameBtn.propTypes = {
  id: PropTypes.number.isRequired,
  activeColor: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default GameBtn;

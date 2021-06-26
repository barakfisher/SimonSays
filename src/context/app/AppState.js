import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  SET_CURRENT_PRESSED,
  SET_SEQUENCE_ARR,
  SET_USER_SEQUENCE_ARR,
  SET_CURRENT_SCORE,
  SET_IS_GAME_OVER,
  SET_USER,
  SET_LEADER_BORD
} from "../types";

const AppState = (props) => {
  const initialState = {
    sequenceArr: [],
    userSequenceArr: [],
    currentPressed: -1,
    currentScore: 0,
    leaderBord:[],
    user:null
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setUser = (_user) => {
    dispatch({ type: SET_USER, payload: _user });
  };


  const setSequenceArr = (_sequenceArr) => {
    dispatch({ type: SET_SEQUENCE_ARR, payload: _sequenceArr });
  };

  const setUserSequenceArr = (_userSequenceArr) => {
    dispatch({ type: SET_USER_SEQUENCE_ARR, payload: _userSequenceArr });
  };

  const setCurrentPressed = (_currentPressed) => {
    dispatch({ type: SET_CURRENT_PRESSED, payload: _currentPressed });
  };

  const setCurrentScore = (_currentScore) => {
    dispatch({ type: SET_CURRENT_SCORE, payload: _currentScore });
  };

  const setIsGameOver = (_isGameOver) => {
    dispatch({ type: SET_IS_GAME_OVER, payload: _isGameOver });
  };
  const setLeaderBord = (_leaderBord) => {
    dispatch({ type: SET_LEADER_BORD, payload: _leaderBord });
  };


  return (
    <AppContext.Provider
      value={{
        
        user: state.user,
        setUser,

        sequenceArr: state.sequenceArr,
        setSequenceArr,

        userSequenceArr: state.userSequenceArr,
        setUserSequenceArr,

        currentPressed: state.currentPressed,
        setCurrentPressed,

        isGameOver: state.isGameOver,        
        setIsGameOver,

        currentScore: state.currentScore,
        setCurrentScore,

        leaderBord:state.leaderBord,
        setLeaderBord
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

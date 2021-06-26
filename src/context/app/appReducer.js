import {
  SET_USER,
  SET_SEQUENCE_ARR,
  SET_USER_SEQUENCE_ARR,
  SET_CURRENT_PRESSED,
  SET_CURRENT_SCORE,
  SET_IS_GAME_OVER,
  SET_LEADER_BORD
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_SEQUENCE_ARR:
      return {
        ...state,
        sequenceArr: action.payload,
      };

    case SET_USER_SEQUENCE_ARR:
      return {
        ...state,
        userSequenceArr: action.payload,
      };

    case SET_CURRENT_PRESSED:
      return {
        ...state,
        currentPressed: action.payload,
      };

    case SET_CURRENT_SCORE:
      return {
        ...state,
        currentScore: action.payload,
      };

    case SET_IS_GAME_OVER:
      return {
        ...state,
        isGameOver: action.payload,
      };

    case SET_LEADER_BORD:
      return {
        ...state,
        leaderBord: action.payload,
      };

    default:
      return state;
  }
};

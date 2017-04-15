'use strict';

const initialState = {
  display: [],
  miniDisplay: ""
}

export default (state=initialState, action) => {
  // console.log("reducer called... actiontype=" + action.type);
  switch(action.type) {
    case "BUTTON_CLICKED":
      if (maxDigitsReached(state)) {
        return {
          display: [],
          miniDisplay: "Sorry, can not display digit length"
        }
      }
      return Object.assign({}, state, {
        display: /\d/.test(state.display) ? state.display.concat(action.payload) : [action.payload],
        miniDisplay: state.miniDisplay + action.payload
      });
    case "OPERATOR_CLICKED":
      if (maxDigitsReached(state)) {
        return {
          display: [],
          miniDisplay: "Sorry, can not display digit length"
        }
      }
      switch(action.payload) {
        case "AC":
          return initialState;
        case "CE":
          if (state.miniDisplay.length < 2) {
            return initialState;
          }
          return Object.assign({}, state, {
            display: state.miniDisplay[state.miniDisplay.length - 2],
            miniDisplay: state.miniDisplay.substr(0, state.miniDisplay.length - 1)
          });
        default:
          return Object.assign({}, state, {
            display: action.payload,
            miniDisplay: state.miniDisplay + action.payload
          });
      }
    case "EQUALS_CLICKED":
      return calculate(state);
  }
  return state;
}

function maxDigitsReached(state) {
  if (state.display.length >= 8) {
    return true;
  }
  return false;
}

function calculate (state) {
  console.log(state);
  return state;
};

'use strict';

const initialState = {
    display: [],
    miniDisplay: ""
}

export default (state=initialState, action) => {
  // console.log("reducer called... actiontype=" + action.type);
  switch(action.type) {
    case "BUTTON_CLICKED":
      return Object.assign({}, state, {
        display: /\d/.test(state.display) ? state.display.concat(action.payload) : [action.payload],
        miniDisplay: state.miniDisplay + action.payload
      });
    case "OPERATOR_CLICKED":
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
          });;
        default:
          return Object.assign({}, state, {
            display: action.payload,
            miniDisplay: state.miniDisplay + action.payload
          });
      }
    case "EQUALS_CLICKED":
  }
  return state;
}

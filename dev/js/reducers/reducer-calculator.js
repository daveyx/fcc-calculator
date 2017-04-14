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
      return Object.assign({}, state, {
        display: action.payload,
        miniDisplay: state.miniDisplay + action.payload
      });
    case "EQUALS_CLICKED":
  }
  return state;
}

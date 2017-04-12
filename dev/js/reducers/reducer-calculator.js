'use strict';

const initialState = {
    display: [0],
    miniDisplay: ""
}

export default function(state=initialState, action) {
  console.log("reducer called... actiontype=" + action.type);
  return state;
}

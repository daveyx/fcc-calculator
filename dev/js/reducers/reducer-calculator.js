'use strict';

const initialState = {
  display: [],
  miniDisplay: "",
  result: ""
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "BUTTON_CLICKED":
      if (maxDigitsReached(state)) {
        return {
          display: [],
          miniDisplay: "Sorry, can not display digit length"
        }
      }
      return state.result ?
        {
          display: [action.payload],
          miniDisplay: action.payload,
          result: ""
        } :
        Object.assign({}, state, {
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
          return state.result ?
            {
              display: [action.payload],
              miniDisplay: state.result + action.payload,
              result: ""
            } :
            /\d/.test(state.display[state.display.length - 1]) ?
              Object.assign({}, state, {
                display: action.payload,
                miniDisplay: state.miniDisplay + action.payload
              }) :
              Object.assign({}, state);
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

function calculate(state) {
  let operands = [];
  let operators = [];
  let tempOperand = "";
  for (let i = 0; i < state.miniDisplay.length; i++) {
    let val = state.miniDisplay[i];
    if (/\d|\./.test(val)) {
      tempOperand += val;
    } else {
      operands.push(tempOperand);
      tempOperand = "";
      operators.push(val);
    }
  };
  operands.push(tempOperand);
  let result = operands.reduce((acc, current, index) => {
    if (acc === null) {
      return current;
    } else {
      return (calculateInternal(acc, current, operators[index - 1]));
    }
  }, null);
  console.log(result);
  return Object.assign({}, state, {
    display: [result],
    miniDisplay: state.miniDisplay + "=" + result,
    result: result
  });
};

function calculateInternal(op1, op2, operator) {
  let result;
  switch(operator) {
    case "+":
      result = Number(op1) + Number(op2);
      break;
    case "-":
      result = Number(op1) - Number(op2);
      break;
    case "*":
      result = Number(op1) * Number(op2);
      break;
    case "/":
      result = Number(op1) / Number(op2);
      break;
    default: return undefined;
  }
  return result;
}

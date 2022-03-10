import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "../actions/types";

// reducerで管理する初期値
const initialAppState = {
  inputValue: 0,
  operator: "",
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  // switchはactionのタイプによってロジックが変わるという宣言
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        // state.inputValueの初期値は0,0*10で1になる
        // こうしておくと1と5を入力したときに[15にすることができる]
        inputValue: state.inputValue * 10 + action.number,
        //　まだ計算結果は表示しない
        showingResult: false,
      };
    case PLUS:
      // 演算子が一度でも押された時の処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case MINUS:
      // 演算子が一度でも押された時の処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPLY:
      // 演算子が一度でも押された時の処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case DIVIDE:
      // 演算子が一度でも押された時の処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case CLEAR:
      return {
        inputValue: 0,
        operator: "",
        calculator: false,
        resultValue: 0,
        showingResult: false,
      };
    case EQUAL:
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "",
            calculate: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;

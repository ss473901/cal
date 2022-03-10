import styled from "styled-components";
import Button from "./components/Button";
import Result from "./components/Result";
import { connect } from "react-redux";
import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from "./Redux/actions";

const App = (props) => {
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;

  return (
    <>
      <ResultWrapper>
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </ResultWrapper>

      <ButtonWrapper>
        <Number>
          <Upper>
            <Button text={"7"} onClick={() => onNumberClick(7)} />
            <Button text={"8"} onClick={() => onNumberClick(8)} />
            <Button text={"9"} onClick={() => onNumberClick(9)} />
          </Upper>

          <Middle>
            <Button text={"4"} onClick={() => onNumberClick(4)} />
            <Button text={"5"} onClick={() => onNumberClick(5)} />
            <Button text={"6"} onClick={() => onNumberClick(6)} />
          </Middle>

          <Lower>
            <Button text={"1"} onClick={() => onNumberClick(1)} />
            <Button text={"2"} onClick={() => onNumberClick(2)} />
            <Button text={"3"} onClick={() => onNumberClick(3)} />
          </Lower>

          <Bottom>
            <Button text={"0"} onClick={() => onNumberClick(0)} />
            <Button text={"AC"} onClick={() => onClearClick()} />
            <Button text={"="} onClick={() => onEqualClick()} />
          </Bottom>
        </Number>
        <Operator>
          <Button text={"÷"} onClick={() => onPlusClick()} />
          <Button text={"×"} onClick={() => onMultiplyClick()} />
          <Button text={"−"} onClick={() => onMinusClick()} />
          <Button text={"＋"} onClick={() => onDivideClick()} />
        </Operator>
      </ButtonWrapper>
    </>
  );
};

const ResultWrapper = styled.div``;
const ButtonWrapper = styled.div``;
const Number = styled.div``;
const Upper = styled.div``;
const Middle = styled.div``;
const Lower = styled.div``;
const Bottom = styled.div``;
const Operator = styled.div``;

const mapStateProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(App);

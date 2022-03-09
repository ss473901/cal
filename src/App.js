import styled from "styled-components";
import Button from "./components/Button";
import Result from "./components/Result";

const App = () => {
  return (
    <>
      <ResultWrapper>
        <Result result={"計算結果"} />
      </ResultWrapper>

      <ButtonWrapper>
        <Number>
          <Upper>
            <Button text={"7"} />
            <Button text={"8"} />
            <Button text={"9"} />
          </Upper>

          <Middle>
            <Button text={"4"} />
            <Button text={"5"} />
            <Button text={"6"} />
          </Middle>

          <Lower>
            <Button text={"1"} />
            <Button text={"2"} />
            <Button text={"3"} />
          </Lower>

          <Bottom>
            <Button text={"0"} />
            <Button text={"AC"} />
            <Button text={"="} />
          </Bottom>
        </Number>
        <Operator>
          <Button text={"÷"} />
          <Button text={"×"} />
          <Button text={"−"} />
          <Button text={"＋"} />
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

export default App;

import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};

const SButton = styled.button``;

export default Button;

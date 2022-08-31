/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { NUMBERS } from "../constants/numbers";
import { OPERANDS } from "../constants/operands";

const ButtonGrid = (props) => {
  return (
    <ButtonWrapper>
      {NUMBERS.map((item, index) => (
        <Button
          className="grid-item"
          id={item.name}
          value={item.symbol}
          onClick={props.handleValue}
          style={item.style}
          key={`${item.name}-${index}`}
        >
          {item.symbol}
        </Button>
      ))}
      {OPERANDS.map((item, index) => {
        return (
          <Button
            className="grid-item"
            id={item.name}
            onClick={props[item.onClick]}
            style={item.style}
            key={`${item.name}-${index}`}
          >
            {item.symbol}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: grid;
  height: 80%;
  background: none;
  grid:
    "AC AC divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  background: none;
  font-weight: 500;
  color: white;
  font-size: 20px;
  border: none;
  border-top: 1px ridge #03163e;
  border-bottom-left-radius: ${(props) => (props.id === "zero" ? 5 : 0)}px;
  &:hover {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

export default ButtonGrid;

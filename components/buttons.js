/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { NUMBERS } from "../constants/numbers";

const Buttons = (props) => {
  return (
    <ButtonWrapper>
      {NUMBERS.map((item) => (
        <Button
          className="grid-item"
          id={item.name}
          value={item.number}
          onClick={props.handleValue}
          style={{ gridArea: item.name, borderRight: '1px ridge #03163e' }}
        >
          {item.number}
        </Button>
      ))}
      <Button
        className="grid-item"
        id="equals"
        onClick={props.getSum}
        style={{
          gridArea: "equals", fontWeight: '900',
          borderBottomRightRadius: '5px'
        }}
      >
        =
      </Button>
      <Button
        className="grid-item"
        id="add"
        onClick={props.handleAddition}
        style={{ gridArea: "add", fontWeight: '900'}}
      >
        +
      </Button>
      <Button
        className="grid-item"
        id="subtract"
        onClick={props.handleSubtraction}
        style={{ gridArea: "subtract", fontWeight: '900' }}
      >
        -
      </Button>
      <Button
        className="grid-item"
        id="multiply"
        onClick={props.handleMultiplication}
        style={{ gridArea: "multiply", fontWeight: '900'}}
      >
        *
      </Button>
      <Button
        className="grid-item"
        id="divide"
        onClick={props.handleDivision}
        style={{ gridArea: "divide", fontWeight: '900', borderRight: '1px ridge #03163e'}}
      >
        /
      </Button>
      <Button
        className="grid-item"
        id="decimal"
        onClick={props.addDecimal}
        style={{ gridArea: "decimal", fontWeight: '900',borderRight: '1px ridge #03163e'  }}
      >
        .
      </Button>
      <Button
        className="grid-item"
        id="clear"
        onClick={props.handleClear}
        style={{ gridArea: "AC", borderRight: '1px ridge #03163e'}}
      >
        AC
      </Button>
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
  border-bottom-left-radius: ${props=>props.id==='zero'? 5: 0}px;
  &:hover{
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }

`;

export default Buttons;

/* eslint-disable react/jsx-key */
import styled from "styled-components";
const Buttons = (props) => {
  return (
    <ButtonWrapper>
      <Button
        className="grid-item"
        id="equals"
        onClick={props.getSum}
        style={{
          gridArea: "equals", fontWeight: '900'
        }}
      >
        =
      </Button>
      {props.numberArray.map((item) => (
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
  height: 300px;
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
  font-size: 19px;
  border: none;
  border-top: 1px ridge #03163e;

  border-radius: 0px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }

`;
export default Buttons;

/* eslint-disable react/jsx-key */
import styled from 'styled-components';
const Buttons = (props) => {
  return (
    <ButtonWrapper>
      <Button
        className="grid-item"
        id="equals"
        onClick={props.getSum}
        style={{ gridArea: "equals", backgroundColor: '#ff471a',color: 'white'}}
      >
        =
      </Button>
      {props.numberArray.map((item) => (
        <Button
          className="grid-item"
          id={item.name}
          value={item.number}
          onClick={props.handleValue}
          style={{ gridArea: item.name }}
        >
          {item.number}
        </Button>
      ))}
      <Button
        className="grid-item"
        id="add"
        onClick={props.handleAddition}
        style={{ gridArea: "add" }}
      >
        +
      </Button>
      <Button
        className="grid-item"
        id="subtract"
        onClick={props.handleSubtraction}
        style={{ gridArea: "subtract" }}
      >
        -
      </Button>
      <Button
        className="grid-item"
        id="multiply"
        onClick={props.handleMultiplication}
        style={{ gridArea: "multiply" }}
      >
        *
      </Button>
      <Button
        className="grid-item"
        id="divide"
        onClick={props.handleDivision}
        style={{ gridArea: "divide" }}
      >
        /
      </Button>
      <Button
        className="grid-item"
        id="decimal"
        onClick={props.addDecimal}
        style={{ gridArea: "decimal" }}
      >
        .
      </Button>
      <Button
        className="grid-item"
        id="clear"
        onClick={props.handleClear}
        style={{ gridArea: "AC", backgroundColor: '#ff471a',color: 'white' }}
      >
        AC
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: grid;
  height: 400px;
  grid:
    "AC AC divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
`;

const Button = styled.button`
  font-family: 'Century';
  font-weight: 600;
  font-size: 19px;
  border: 2px solid black;
  border-radius: 30px;
  margin: 1px;
    &:active{
        background-color: #ff471a;
    }
`
export default Buttons;

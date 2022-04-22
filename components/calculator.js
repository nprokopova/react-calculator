import { useState } from "react";
import Buttons from "./buttons";
import Display from "./display";
import styled from 'styled-components';

const Calculator = () => {
  const [numberString, setNumberString] = useState("");
  const [sum, setSum] = useState(0);
  const [display, setDisplay] = useState("0");
  const [numList, setNumList] = useState("");
  const [displayAll, setDisplayAll] = useState("");

  const numberArray = [
    {
      number: "0",
      name: "zero",
    },
    {
      number: "1",
      name: "one",
    },
    {
      number: "2",
      name: "two",
    },
    {
      number: "3",
      name: "three",
    },
    {
      number: "4",
      name: "four",
    },
    {
      number: "5",
      name: "five",
    },
    {
      number: "6",
      name: "six",
    },
    {
      number: "7",
      name: "seven",
    },
    {
      number: "8",
      name: "eight",
    },
    {
      number: "9",
      name: "nine",
    },
  ];

  const handleValue = (e) => {
    let newString = numberString + e.target.value;
    if (displayAll.split(" ").includes("=", -2)) {
      setNumList("");
      setNumberString("");
      setDisplayAll("");
      setDisplay("");
    } else if (newString[0] !== "0") {
      setDisplay(numberString + e.target.value);
      setNumList(numList + e.target.value);
      setNumberString(numberString + e.target.value);
      setDisplayAll(displayAll + e.target.value);
    }
  };

  const handleAddition = () => {
    display === "-"
      ? setNumList(numList.replace(/\W+/, " + "))
      : isNaN(display)
      ? setNumList(numList.replace(display, "+"))
      : setNumList(numList + " + ");
    setDisplay("+");
    setNumberString("");
    setDisplayAll(displayAll + " + ");
  };

  const handleSubtraction = () => {
    isNaN(display) ? setNumList(numList + "-") : setNumList(numList + " - ");
    setNumberString("");
    setDisplay("-");
    setDisplayAll(displayAll + " - ");
  };

  const handleMultiplication = () => {
    display === "-"
      ? setNumList(numList.replace(/\W+/, " * "))
      : isNaN(display)
      ? setNumList(numList.replace(display, "*"))
      : setNumList(numList + " * ");

    setNumberString("");
    setDisplay("*");
    setDisplayAll(displayAll + " * ");
  };
  const handleDivision = () => {
    display === "-"
      ? setNumList(numList.replace(/\W+/, " / "))
      : isNaN(display)
      ? setNumList(numList.replace(display, " / "))
      : setNumList(numList + " / ");

    setNumberString("");
    setDisplay("/");
    setDisplayAll(displayAll + " / ");
  };
  const addDecimal = () => {
    if (!numberString.match(/\./)) {
      setNumList(numList + ".");
      setNumberString(numberString + ".");
      setDisplayAll(displayAll + ".");
    }
  };
  const getSum = () => {
    let newSum;
    const numArray = numList.split(" ");
    numArray.map((item, index, array) => {
      if (index === 0 && sum === 0) {
        newSum = Number(item);
      } else if (index === 0 && sum !== 0) {
        newSum = parseFloat(sum);
      } else if (item !== NaN) {
        switch (array[index - 1]) {
          case "+":
            newSum += Number(item);
            break;
          case "-":
            newSum -= Number(item);
            break;
          case "*":
            newSum *= Number(item);
            break;
          case "/":
            newSum /= Number(item);
            break;
        }
      }
    });
    setSum(newSum);
    setDisplay(newSum);
    setNumList(newSum);
    setDisplayAll(displayAll + " = " + newSum);
  };
  const handleClear = () => {
    setSum(0);
    setNumberString("");
    setNumList("");
    setDisplay("0");
    setDisplayAll("");
  };

  return (
    <Wrapper>
      <Display
        display={display}
        numList={numList}
        displayAll={displayAll}
        sum={sum}
      />
      <Buttons
        handleValue={handleValue}
        numberArray={numberArray}
        handleAddition={handleAddition}
        handleSubtraction={handleSubtraction}
        getSum={getSum}
        handleClear={handleClear}
        handleMultiplication={handleMultiplication}
        handleDivision={handleDivision}
        addDecimal={addDecimal}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(to left, #03163E 0%, #47acc9 100%);
  margin-top: 20px;
  display: flex;
  width: 240px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  color: white;
  padding: 3px;
  border-radius: 5px;
`;
export default Calculator;

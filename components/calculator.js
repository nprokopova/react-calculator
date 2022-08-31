import { useState } from "react";
import ButtonGrid from "./buttonGrid";
import Display from "./display";
import styled from "styled-components";

const Calculator = () => {
  const [numberString, setNumberString] = useState("");
  const [sum, setSum] = useState(0);
  const [display, setDisplay] = useState("0");
  const [numList, setNumList] = useState("");
  const [displayAll, setDisplayAll] = useState("");

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
    isNaN(display)
      ? setDisplayAll(displayAll.replace(/\W+/, " + "))
      : setDisplayAll(displayAll + " + ");
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
    isNaN(display)
      ? setDisplayAll(displayAll.replace(/\W+/, " * "))
      : setDisplayAll(displayAll + " * ");
  };

  const handleDivision = () => {
    display === "-"
      ? setNumList(numList.replace(/\W+/, " / "))
      : isNaN(display)
      ? setNumList(numList.replace(display, "/"))
      : setNumList(numList + " / ");

    setNumberString("");
    setDisplay("/");
    isNaN(display)
      ? setDisplayAll(displayAll.replace(/\W+/, " / "))
      : setDisplayAll(displayAll + " / ");
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
            if (array[index - 3] === "+") {
              newSum -= Number(array[index - 2]);
              newSum += Number(array[index - 2]) * Number(item);
            } else if (array[index - 3] === "-") {
              newSum += Number(array[index - 2]);
              newSum -= Number(array[index - 2]) * Number(item);
            } else if (array[index - 3] === "*" || array[index - 3] === "/") {
              newSum *= Number(item);
            } else {
              newSum = Number(array[index - 2]) * Number(item);
            }
            break;
          case "/":
            if (Number(item) === 0) break;
            if (array[index - 3] === "+") {
              newSum -= Number(array[index - 2]);
              newSum += Number(array[index - 2]) / Number(item);
            } else if (array[index - 3] === "-") {
              newSum += Number(array[index - 2]);
              newSum -= Number(array[index - 2]) / Number(item);
            } else if (array[index - 3] === "*" || array[index - 3] === "/") {
              newSum /= Number(item);
            } else {
              newSum = Number(array[index - 2]) / Number(item);
            }
            break;
        }
      }
    });

    setSum(newSum);
    setDisplay(`${newSum}`);
    setNumList(`${newSum}`);
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
      <ButtonGrid
        handleValue={handleValue}
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
  background: linear-gradient(to bottom left, #03163e 0%, #47acc9 100%);
  display: flex;
  width: 280px;
  height: 490px;
  flex-direction: column;
  justify-content: center;
  color: white;
  border-radius: 5px;
`;

export default Calculator;

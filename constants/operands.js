export const OPERANDS = [
  {
    symbol: "=",
    name: "equals",
    onClick: "getSum",
    style: {
      gridArea: "equals",
      fontWeight: "900",
      borderBottomRightRadius: "5px",
    },
  },
  {
    symbol: "+",
    name: "add",
    onClick: "handleAddition",
    style: {
      gridArea: "add",
      fontWeight: "900",
    },
  },
  {
    symbol: "-",
    name: "subtract",
    onClick: "handleSubtraction",
    style: {
      gridArea: "subtract",
      fontWeight: "900",
    },
  },
  {
    symbol: "X",
    name: "multiply",
    onClick: "handleMultiplication",
    style: { gridArea: "multiply", fontWeight: "900" },
  },
  {
    symbol: "/",
    name: "divide",
    onClick: "handleDivision",
    style: {
      gridArea: "divide",
      fontWeight: "900",
      borderRight: "1px ridge #03163e",
    },
  },
  {
    symbol: ".",
    name: "decimal",
    onClick: "addDecimal",
    style: {
      gridArea: "decimal",
      fontWeight: "900",
      borderRight: "1px ridge #03163e",
    },
  },
  {
    symbol: "AC",
    name: "clear",
    onClick: "handleClear",
    style: {
      gridArea: "AC",
      borderRight: "1px ridge #03163e",
    },
  },
];

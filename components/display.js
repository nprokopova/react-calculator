import React from "react";
import styled from "styled-components";

const Display = ({ display, displayAll }) => (
  <DisplayWrapper>
    <DisplayAll displayAll={displayAll}>{displayAll}</DisplayAll>
    <DisplayCurrent display={display}>{display}</DisplayCurrent>
  </DisplayWrapper>
);

const DisplayWrapper = styled.div`
  background: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content:space-between;
  height: 130px;
`;

const DisplayAll = styled.p`
  margin: 15px;
  height: 30px;
  text-align: right;
  word-break: break-all;
  font-size: ${(props) => (16 - props.displayAll.length / 15) / 16}rem;

`;

const DisplayCurrent = styled.p`
  margin: 15px;
  font-weight: 600;
  margin-top: 5px;
  word-break: break-all;
  text-align: right;
  font-size: ${(props) => (24 - props.display.length / 3) / 16}rem;
`;

export default Display;

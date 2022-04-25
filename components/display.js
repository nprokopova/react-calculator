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
  height: 100px;
`;

const DisplayAll = styled.p`
  height: 30px;
  margin: 15px;
  margin-right: 22px;
  margin-bottom: 0px;
  text-align: right;
  word-break: break-all;
  font-size: ${(props) => (16 - props.displayAll.length / 15) / 16}rem;
  padding: 0px;
`;

const DisplayCurrent = styled.p`
  margin: 15px;
  margin-right: 22px;
  font-weight: 600;
  margin-top: 5px;
  word-break: break-all;
  text-align: right;
  font-size: ${(props) => (25 - props.display.length / 3) / 16}rem;
  padding: 0px;
`;

export default Display;

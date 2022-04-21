import React from "react";
import styled from 'styled-components';

const Display = (props) => {
    return (
        <DisplayWrapper>
            <DisplayAll displayAll = {props.displayAll}>
                {props.displayAll}
            </DisplayAll>
            <DisplayCurrent display = {props.display}>{props.display}</DisplayCurrent>
        </DisplayWrapper>
    );
};

const DisplayWrapper = styled.div`
  font-family: 'Century';
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 70px;
  padding-bottom: 10px;
  border-radius: 9px;
  margin-bottom: 10px;
`
const DisplayAll = styled.p`
  height: 30px;
  margin: 10px;
  word-break: break-all;
  font-size: ${props=>(15-(props.displayAll.length/8))/16}rem;
  padding: 0px;
  color: white;
`
const DisplayCurrent = styled.p`
  margin: 10px;
  word-break: break-all;
  font-size:  ${props=>(20-(props.display.length/5))/16}rem;
  padding: 0px;
`
export default Display;
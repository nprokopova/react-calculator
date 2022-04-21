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
  background: linear-gradient(to left, #03163E 0%, #225D6F 100%);
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100px;
`
const DisplayAll = styled.p`
  height: 30px;
  margin: 15px;
  margin-bottom: 0px;
  text-align: right;
  word-break: break-all;
  font-size: ${props=>(16-(props.displayAll.length/15))/16}rem;
  padding: 0px;
`
const DisplayCurrent = styled.p`
  margin: 15px;
  font-weight: 600;
  margin-top: 5px;
  word-break: break-all;
  text-align: right;
  font-size:  ${props=>(25-(props.display.length/3))/16}rem;
  padding: 0px;
`
export default Display;
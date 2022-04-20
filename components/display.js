import React from "react";
import styled from 'styled-components';

const Display = (props) => {
    return (
        <DisplayWrapper>
            <DisplayAll>
                {props.displayAll}
            </DisplayAll>
            <DisplayCurrent>{props.display}</DisplayCurrent>
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
  height: 90px;
  padding-bottom: 10px;
  border-radius: 9px;
  margin-bottom: 10px;
`
const DisplayAll = styled.p`
  height: 30px;
  margin: 0px;
  margin-right: 20px;
  font-size: 15px;
  padding: 0px;
  color: white;
`
const DisplayCurrent = styled.p`
  margin: 0px;
  margin-right: 20px;
  font-size: 2.5vw;
  padding: 0px;
`
export default Display;
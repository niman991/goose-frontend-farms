import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import styled from 'styled-components';


const TimerBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 40px;
  `


const rootElement = document.getElementById('root');
ReactDOM.render(<Timer />, rootElement);



function Timer() {
  return (
    <div>
      <TimerBox>
        <Countdown date={Date.now() + 10000000} />
      </TimerBox>
    </div>
);
}




export default Timer

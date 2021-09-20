import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import styled from 'styled-components'



const TimerBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 40px;
  `


const Timer = () => {

  return (
  <TimerBox>
       ReactDOM.render(
      <Countdown date={Date.now() + 1000000} />,
      document.getElementById('root')
    );
  </TimerBox>
  )
  
};




export default Timer

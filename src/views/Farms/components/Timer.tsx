import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import styled from 'styled-components';


const TimerBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  text-align: center;
  padding-top: 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-style: none;
  `


const Timer = () => {

  return (
    <div>
      <TimerBox>
        <Countdown date='2021-09-25T00:00:00' />
      </TimerBox>
    </div>
);
}




export default Timer

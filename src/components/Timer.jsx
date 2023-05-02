import React from 'react';
import { useState, useEffect } from 'react';


const Timer = () => {

  function buttonChange() {
    if (buttonState === "Start") {
      setButtonState("Pause");
    } else {
      setButtonState("Start");
    }
  }

  const[TabState, setTabState] = useState("Pomodoro");

  const handleSelect = (eventkey) => {
    setTabState(eventkey);
    if(eventkey === "Pomodoro"){
      setMinutes(25);
      setSeconds(0);
    }else if(eventkey === "SBreak"){
      setMinutes(5);
      setSeconds(0);
    }else{
      setMinutes(15);
      setSeconds(0);
    }
  }

  let defaultTabStyle = "tab text-slate-50";
  let selectedTabStyle = "tab text-slate-50 tab-active";

  
  const[initialMinute, setInitialMinute] = useState(25);
  const[initialSeconds, setInitialSeconds] = useState(0);
  const[timerState, setTimerState] = useState("Pomodoro");
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [buttonState, setButtonState] = useState("Start");
  const [pomoCount, setPomoCount] = useState(0);


  useEffect(() => {
    if(buttonState === "Pause") {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          if(TabState === "Pomodoro"){
            setPomoCount(pomoCount + 1);
            if(pomoCount < 3){
              handleSelect("SBreak");
              buttonChange();
            }else if(pomoCount > 4 && pomoCount % 4 === 3){
              handleSelect("LBreak");
              buttonChange();
            }else if(pomoCount === 3){
              handleSelect("LBreak");
              buttonChange();
            }else{
              handleSelect("SBreak");
              buttonChange();
            }
        }else{
          handleSelect("Pomodoro");
          buttonChange();
        }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  }
  }, [buttonState, minutes, seconds]);

  return (
    <div className="flex flex-col mx-auto">
      <div className="tabs tabs-boxed text-slate-50 justify-center">
        <a className={TabState === "Pomodoro" ? selectedTabStyle : defaultTabStyle} eventkey="Pomodoro" onClick={() => {handleSelect("Pomodoro"); 
        }}>Pomodoro</a> 
        <a className={TabState === "SBreak" ? selectedTabStyle : defaultTabStyle} eventkey="SBreak" onClick={() => {handleSelect("SBreak"); 
        }}>Short Break</a> 
        <a className={TabState === "LBreak" ? selectedTabStyle : defaultTabStyle} eventkey="LBreak" onClick={() => {handleSelect("LBreak"); 
        }}>Long Break</a>
      </div>
      <span className="countdown font-mono text-6xl mx-auto pt-5">
        <span style={{"--value":minutes}}></span>:
        <span style={{"--value": seconds < 10 ? `0${seconds}` : seconds}}></span>
      </span>
      <div className="mx-auto pt-5">
        <button className="btn btn-active btn-primary" onClick={() => buttonChange()}>{buttonState}</button>
      </div>
      <div>
        <p className="text-slate-50 text-center pt-5 bold">Pomodoros Completed: {pomoCount}</p>
      </div>
    </div>
  )
}

export default Timer





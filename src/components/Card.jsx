import React, { useState } from 'react';
import Timer from './Timer';

const Card = () => {

  const[TabState, setTabState] = useState("Pomodoro");
  const handleSelect = (eventkey) => {
    setTabState(eventkey);
  }
  let defaultTabStyle = "tab text-slate-50";
  let selectedTabStyle = "tab text-slate-50 tab-active";

  return (
    <div className="flex flex-col">
    <div className="lg:card bg-secondary text-primary-content scale-125 grow-0">
    <div className="card-body">
      <Timer/>
    </div>
  </div>
  </div>
  )
}

export default Card
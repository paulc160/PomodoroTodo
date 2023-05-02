import React, { useState } from 'react';

const ToDo = () => {

    const [Completed, setCompleted] = useState(false);

  let ToDoList = { arr: [
    {task: "Clean Bedroom", Completed: false},
    {task: "Submit Assignment", Completed: false},
    {task: "Do Laundry", Completed: false},
  ]}; 
  
  let defaultTickStyle = "checkbox checkbox-primary"; 
  let completedTickStyle = "checkbox checkbox-info";


  const buttonClick = (index) => {
    ToDoList.arr[index].Completed = true;
  }
  return (
    <div className="flex flex-col justify-centre text-center pt-5 text-slate-50 scale-100 p-20">
        <h1 className="uppercase text-xl font-bold">TASKS</h1>
        <div className="divider before:bg-slate-50 after:bg-slate-50"></div>
        {
            ToDoList.arr.map((item, index) => (
                <div className="p-2">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-row">
                                <input type="checkbox" key={index} className={item.Completed === true ? completedTickStyle : defaultTickStyle} onClick={() => buttonClick(index)}/>
                                <h2 className="card-title mx-auto">{item.task}</h2>
                            </div>
                            </div>
                        </div>
                    </div>
            ))
        }
        
        <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add New Task
        </button>
    </div>
  )
}

export default ToDo
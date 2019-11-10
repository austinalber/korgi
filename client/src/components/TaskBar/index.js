import React from 'react';
import './style.css';

const TaskBar = props => {

  // let taskList = this.props.tasks;
  
  return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
         <div className="navbar-nav">
            <h1 id='task'>{props.task}</h1>
        </div>       
      </nav>
  )
}

export default TaskBar; 

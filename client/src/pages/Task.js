import React, { Component } from "react";
import taskList from "./taskList.json"
import Wrapper from "../components/Wrapper";
import TaskBar from "../components/TaskBar/index.js";
import axios from "axios";

class TaskTimer extends Component {
  // set the initial state 
  state = {
   taskList
  };

  render () {
    return (
      <Wrapper>
      {this.state.taskList.map(item => (
      <TaskBar
      id={item.id}
      key={friend.id}
      task={item.task}
      />
      ))}
      </Wrapper>
    );
  }
}

export default TaskTimer; 


  // function will start when page loads, sets the interval
//   componentDidMount() {
//     this.getTask();
//     this.interval = setInterval(() => {
//       this.getTask();
//     }, 5000);
//   }

//   // function to grab task from taskList.json
//   getTask() {
//     axios.get('/utils/taskList.json')
//       .then(res => {
//         console.log(res)
//         return res.task;  
//       })
//       .then(res => {
//         this.setState({
//           task: res.taskList // error
//         });
//       })
//       .catch(function(error) {
//         console.log(error); 
//       })
//   }

// // clears the interval
//  componentWillUnmount() {
//    clearInterval(this.interval);
//  }

//   render() {
//     return (
//     <p>{this.state.task}</p>
//     )
//   }
// }



export default TaskTimer; 
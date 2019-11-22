import React from 'react'
import Typography from '@material-ui/core/Typography';

function TaskCounter(props) {
  
    return (
      <div style={{textAlign: "center"}}>
        <h3>Task</h3>
        <Typography className="TaskCounter" variant='display4'>{props.taskCounter}</Typography>
      </div>
    )
  }
  

export default TaskCounter; 
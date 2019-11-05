import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

function TaskList(props) {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Weekly Task</h1>
        <Typography className="Task Title" variant='display4'>{props.tasklist}</Typography>
      </div>
    )
    }


export default TaskList; 
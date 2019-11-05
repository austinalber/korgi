import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TaskList extends Component {
  state = {
    counter: 0
  }
  handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  render () {
    return (
      <div style={{textAlign: "center"}}>
        <Typography variant='display4'>{this.state.counter}</Typography>
        <h1>Weekly Task</h1>
        <Button color='secondary' variant='raised' onClick={this.handleAddClick}>Task</Button>
      </div>
    )
  }
}

export default TaskList; 
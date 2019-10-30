import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export default class KudosCounter extends Component {
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
        <Button color='secondary' variant='raised' onClick={this.handleAddClick}>Add</Button>
      </div>
    )
  }
}
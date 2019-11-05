import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class KudosCounter extends Component {
  state = {
    counter: 0
  }
  handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  render () {
    return (
      <div style={{textAlign: "center"}}>
        <Typography variant='display4'>{this.props}</Typography>
        <Button color='secondary' variant='raised' onClick={this.handleAddClick}>Add</Button>
      </div>
    )
  }
}

export default KudosCounter; 
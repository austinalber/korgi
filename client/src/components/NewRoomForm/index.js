import React, {Component} from 'react'

class NewRoomForm extends Component {
  state = {
    roomName: ''
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value
    })
  };
  
  handleSubmit = (e) => {
      e.preventDefault()
      // inverse data flow - goes to parent instead of child
      this.props.createRoom(this.state.roomName)
      // empty out the room after submission
      this.setState({
        roomName: ''
      })
  };
  
  render () {
      return (
          <div className="new-room-form">
            <form onSubmit={this.handleSubmit}>
              <input
                  value={this.state.roomName}
                  onChange={this.handleChange}
                  type="text" 
                  placeholder="Create a Room" 
                  required 
              />
              <button id="create-room-btn" type="submit">+</button>
            </form>
          </div>
      )
    }
  };

export default NewRoomForm;
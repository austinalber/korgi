import React, {Component} from 'react'

class SendMessageForm extends Component {
  state = {
    message: ''
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault(0)
    this.console(this.state.message)
  }
 m 
  render() {
    console.log(this.state.message)
    return (
      <form
        onSubmit={this.handleSubmit} 
        className='send-meesage-form'>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder='Type your message and hit ENTER'
          type='text'/>
      </form>
    )
  }
}

export default SendMessageForm; 
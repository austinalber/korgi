import React, {Component} from 'react'

class SendMessageForm extends Component {
  state = {
   message: ''
  }

  handleChange = (e) => {
    this.setState ({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }
 
  render() {
    // console.log(this.state.message)
    return (
      <form className='send-message-form'
        onSubmit={this.handleSubmit}>
        <input
          disabled={this.props.disabled}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder='Type your message and hit ENTER'
          type='text'
        />
        <button type='submit' className='button-message' disabled={this.props.disabled}>Submit</button>
      </form>
    )
  }
}

export default SendMessageForm;


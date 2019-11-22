import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Message from '../Message'


class MessageList extends Component {
  
  componentWillUpdate() {
    // when scrolling, old messages scroll to top and new message on bottom
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
      // automatically scrolls down to bottom when new message arrives
      if (this.shouldScrollToBottom) {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight   
      }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
            <div className="join-room">
              &larr; Join a room!
            </div>
        </div>
      )
    }

    return (
      <div className="message-list">
        {
          this.props.messages.map((message, index) => {
            return (
              <Message key={index} username={message.senderId} text={message.text} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageList; 
import React, {Component} from 'react'

class MessageList extends Component {
  render() {
    return (
        <div className="message-list">
            {this.props.message.map((message, index) => {
                return (
                  <Message key={index} username={message.senderId} text={message.text} />
                )
            })}
        </div>
    )
}
}

export default MessageList; 
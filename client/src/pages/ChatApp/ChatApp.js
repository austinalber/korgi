import React, {Component} from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'


// Hook up a React component with an API

class ChatApp extends Component {
  render() {
    return (
      <div className="chatApp">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    ); 
  }
}

export default ChatApp; 
import React, {Component} from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from "../../components/MessageList"; 
import SendMessageForm from '../../components/SendMessageForm'
import RoomList from '../../components/RoomList'
import NewRoomForm from '../../components/NewRoomForm'

const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a4df3443-cb08-41b4-ac5f-0b9bac981b05/token";
const instanceLocator = "v1:us1:a4df3443-cb08-41b4-ac5f-0b9bac981b05";

// set the initial state of the object
class ChatApp extends Component {

  state = {
    message: []
  }

// hook up a React component with an API
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: instanceLocator, 
        userId: 'korgi', 
        tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl
        })
    })
    //curent user is the interface that communicates with the chatKit API
    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: '21e16552-cff0-436d-8123-49ba56e523e9',
          messageLimit: 25, 
          hooks: {
          // fetch data from the chatKit API
            onNewMessage: message => {
              console.log('message.text: ', message.text);
          // ... spread operator appends the new message to the previous message at the end - push method would modify the original array 
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
    }
    
  // everytime state/data changes, the page rerenders and the new data will be pass down to the messages via props [messages=]
  render() {
    return (
      <div className="chatApp">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    ); 
  }
}

export default ChatApp; 

// whenever chatkit register a new message in thh chatroom, hooks listen for it, then the  event handler onnewMessage is called 
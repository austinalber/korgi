import React, {Component} from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from "../../components/MessageList"; 
import SendMessageForm from '../../components/SendMessageForm'
import RoomList from '../../components/RoomList'
import NewRoomForm from '../../components/NewRoomForm'
import { tokenUrl, instanceLocator, userId } from '../../config'
// import { tokenProvider, TokenProvider } from "@pusher/chatkit-client-react"

// let tokenProvider = YourTokenProvider() 


// set the initial state of the object
class ChatApp extends Component {
  state = {
  roomId: null,
  messages: [], 
  joinableRooms: [], 
  joinedRooms: []
  // currentUser: null, 
  }



  // hook up a React component with an API
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator, 
      userId: userId, 
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
    })
  })

    // curent user is the interface that communicates with the chatKit API
    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => {
       console.log('error on connecting:', err)
      })
    }
    
    getRooms= () => {
      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => {
        console.log('error on joinableRooms: ',err)
      })
    }

    // ... spread operator go through the items + appends the new message to the previous message at the end - push method would modify the original array 

    subscribeToRoom = (roomId) => {
      this.setState({ messages: [] })
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        messageLimit: 25,
        hooks: {
          onMessage: message => {
            this.setState({
                messages: [...this.state.messages, message]
            })
          }
        }
      })
      .then(room => {
        this.setState({
            roomId: room.id
        })
        this.getRooms()
      })
      .catch(err => { 
        console.log('error on subscribing to room: ', err)
      })
    }

    sendMessage = (text) => {
      this.currentUser.sendMessage({
        text: text, 
        roomId: this.state.roomId
      })
    }
    
    createRoom = (name) => {
      this.currentUser.createRoom({
          name
      })
      // automatically log into the room generated
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => { 
        console.log('error with createRoom: ', err)
      })
    
    
    }

    // everytime state/data changes, the page rerenders and the new data will be pass down to the messages via props [messages=]
    render() {
      return (
        <div className="app">
          <RoomList
              roomId={this.state.roomId}
              subscribeToRoom={this.subscribeToRoom}
              rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} 
          />
          <MessageList 
              roomId={this.state.roomId}
              messages={this.state.messages} 
          />
          <SendMessageForm
              sendMessage={this.sendMessage} /
          >
          <NewRoomForm createRoom={this.createRoom} 
          />
        </div>
    )
  }
}

export default ChatApp; 

// whenever chatkit register a new message in thh chatroom, hooks listen for it, then the  event handler onnewMessage is called 
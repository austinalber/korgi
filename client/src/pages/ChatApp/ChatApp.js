// import { tokenProvider, TokenProvider } from "@pusher/chatkit-client-react"


import React, { Component } from 'react';
import {
  handleInput,
  connectToChatkit,
  connectToRoom,
  sendMessage,
  sendDM,
} from '../../methods';
import Dialog from '../../components/Dialog';
import RoomList from '../../components/RoomList';
import ChatSession from '../../components/ChatSession';
import RoomUsers from '../../components/RoomUsers';
// css 
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './style.css';

class ChatApp extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
    };

    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
    this.sendMessage = sendMessage.bind(this);
    this.sendDM = sendDM.bind(this);
  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
    } = this.state;

    return (
      <div className="ChatApp">
        <aside className="sidebar left-sidebar">
          {currentUser ? (
            <div className="user-profile">
              <span className="username">{currentUser.name}</span>
              <span className="user-id">{`@${currentUser.id}`}</span>
            </div>
          ) : null}
          {currentRoom ? (
            <RoomList
              rooms={rooms}
              currentRoom={currentRoom}
              connectToRoom={this.connectToRoom}
              currentUser={currentUser}
            />
          ) : null}
        </aside>
        <section className="chat-screen">
          <header className="chat-header">
            {currentRoom ? <h3>{roomName}</h3> : null}
          </header>
          <ul className="chat-messages">
            <ChatSession messages={messages} />
          </ul>
          <footer className="chat-footer">
            <form onSubmit={this.sendMessage} className="message-form">
              <input
                type="text"
                value={newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                onChange={this.handleInput}
              />
            </form>
          </footer>
        </section>
        <aside className="sidebar right-sidebar">
          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
        </aside>
        {showLogin ? (
          <Dialog
            userId={userId}
            handleInput={this.handleInput}
            connectToChatkit={this.connectToChatkit}
          />
        ) : null}
      </div>
    );
  }
}


export default ChatApp;
    
    /*
    import React, {Component} from 'react'
    import './style.css';
    import Chatkit from '@pusher/chatkit-client'
    import MessageList from "../../components/MessageList"; 
    import SendMessageForm from '../../components/SendMessageForm'
    import RoomList from '../../components/RoomList'
    import NewRoomForm from '../../components/NewRoomForm'
    import { tokenUrl, instanceLocator, userId } from '../../config'
    
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
    
    getRooms = () => {
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
        <div className="ChatApp">
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

*/


// whenever chatkit register a new message in thh chatroom, hooks listen for it, then the  event handler onnewMessage is called 
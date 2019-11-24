/* The left sidebar is where the current user will be indicated, 
along with the rooms they belong to. On the right, the members of 
the current room will be listed along with their current status 
(online or offline). Finally, we’ll have the name of the current 
room at the top and the messages in the middle. */

import React, { Component } from 'react';
import {
  handleInput, 
  connectToChatkit
} from '../../methods'; 
// import {
//   handleInput,
//   connectToChatkit,
//   connectToRoom,
//   sendMessage,
//   sendDM,
// } from '../../methods';
import Dialog from '../../components/Dialog';
// import RoomList from '../../components/RoomList';
// import ChatSession from '../../components/ChatSession';
// import RoomUsers from '../../components/RoomUsers';
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
    // this.connectToRoom = connectToRoom.bind(this);
    // this.sendMessage = sendMessage.bind(this);
    // this.sendDM = sendDM.bind(this);
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
          <div className='user-profile'>
            <span className='username'>{currentUser.name}</span>
            <span className='user-id'>{`@${currentUser.id}`}</span>
          </div>
        ) : null }
        </aside>
        <section className="chat-screen">
          <header className="chat-header"></header>
          <ul className="chat-messages"></ul>
          <footer className="chat-footer">
            <form className="message-form">
              <input
                type="text"
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
              />
            </form>
          </footer>
        </section>
        <aside className="sidebar right-sidebar">
        {showLogin ? (
                <Dialog
                  userId={userId}
                  handleInput={this.handleInput}
                  connectToChatkit={this.connectToChatkit}
                />
              ) : null}
            </aside>
          </div>
        );
      }
    }

export default ChatApp;

//     return (
//       <div className="ChatApp">
//         <aside className="sidebar left-sidebar">
//           {currentUser ? (
//             <div className="user-profile">
//               <span className="username">{currentUser.name}</span>
//               <span className="user-id">{`@${currentUser.id}`}</span>
//             </div>
//           ) : null}
//           {currentRoom ? (
//             <RoomList
//               rooms={rooms}
//               currentRoom={currentRoom}
//               connectToRoom={this.connectToRoom}
//               currentUser={currentUser}
//             />
//           ) : null}
//         </aside>
//         <section className="chat-screen">
//           <header className="chat-header">
//             {currentRoom ? <h3>{roomName}</h3> : null}
//           </header>
//           <ul className="chat-messages">
//             <ChatSession messages={messages} />
//           </ul>
//           <footer className="chat-footer">
//             <form onSubmit={this.sendMessage} className="message-form">
//               <input
//                 type="text"
//                 value={newMessage}
//                 name="newMessage"
//                 className="message-input"
//                 placeholder="Type your message and hit ENTER to send"
//                 onChange={this.handleInput}
//               />
//             </form>
//           </footer>
//         </section>
//         <aside className="sidebar right-sidebar">
//           {currentRoom ? (
//             <RoomUsers
//               currentUser={currentUser}
//               sendDM={this.sendDM}
//               roomUsers={roomUsers}
//             />
//           ) : null}
//         </aside>
//         {showLogin ? (
//           <Dialog
//             userId={userId}
//             handleInput={this.handleInput}
//             connectToChatkit={this.connectToChatkit}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }


// export default ChatApp;
    
    
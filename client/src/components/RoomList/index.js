import React from 'react';
    import Proptypes from 'prop-types';

    const RoomList = props => {
      const { rooms, currentRoom, connectToRoom, currentUser } = props;
      const roomList = rooms.map(room => {
        const roomIcon = !room.isPrivate ? '🌐' : '🔒';
        const isRoomActive = room.id === currentRoom.id ? 'active' : '';

        return (
          <li
            className={isRoomActive}
            key={room.id}
            onClick={() => connectToRoom(room.id)}
          >
            <span className="room-icon">{roomIcon}</span>
            {room.customData && room.customData.isDirectMessage ? (
              <span className="room-name">
                {room.customData.userIds.filter(id => id !== currentUser.id)[0]}
              </span>
            ) : (
              <span className="room-name">{room.name}</span>
            )}
          </li>
        );
      });
      return (
        <div className="rooms">
          <ul className="chat-rooms">{roomList}</ul>
        </div>
      );
    };

    RoomList.propTypes = {
      rooms: Proptypes.array.isRequired,
      currentRoom: Proptypes.object.isRequired,
      connectToRoom: Proptypes.func.isRequired,
      currentUser: Proptypes.object.isRequired,
    };

    export default RoomList;


// import React, { Component } from 'react'

// class RoomList extends Component {
//   render () {
//     // sort in order by there id 
//     const orderedRooms=[...this.props.rooms].sort((a, b) => a.id - b.id)
        
//     return (
//       <div className="rooms-list">
//         <ul>
//           <h3 style={{ color: '#D9D9D9' }}>Rooms</h3>
//           {orderedRooms.map(room => {
//             const active = this.props.roomId === room.id ? 'active' : '';
//             return(
//                     <li key={room.id} className={`room ${active}`}>
//                       <a 
//                         href="#"
//                         onClick={() => this.props.subscribeToRoom(room.id)}>
//                         {room.name}
//                       </a>
//                     </li>
//                   );
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// export default RoomList;
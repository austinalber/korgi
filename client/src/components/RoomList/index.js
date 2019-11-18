import React, {Component} from 'react'

class RoomList extends Component {
  render () {
    // sort in order by there id 
    const orderedRooms=[...this.props.rooms].sort((a,b) => a.id - b.id)
        
    return (
      <div className="rooms-list">
        <ul>
          <h3 style={{ color: '#D9D9D9' }}>Your Rooms:</h3>
          {
              orderedRooms.map(room => {
                const active = this.props.roomId === room.id ? "active" : "";
                  return (
                    <li key={room.id} className={"room " + active }>
                        <a onClick={ () => this.props.subscribeToRoom(room.id) } href="#"># {room.name}</a>
                    </li>
                  )
              })
          }
        </ul>
      </div>
    )
  }
}

export default RoomList;
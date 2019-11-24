

    import Chatkit from '@pusher/chatkit-client';
    import axios from 'axios';

    function handleInput(event) {
      const { value, name } = event.target;

      this.setState({
        [name]: value,
      });
    }

    // Add this function
    function connectToRoom(id = '21e16552-cff0-436d-8123-49ba56e523e9') {
      const { currentUser } = this.state;

      this.setState({
        messages: [],
      });

      return currentUser
        .subscribeToRoom({
          roomId: `${id}`,
        })
        .then(currentRoom => {
          const roomName =
            currentRoom.customData && currentRoom.customData.isDirectMessage
              ? currentRoom.customData.userIds.filter(
                  id => id !== currentUser.id
                )[0]
              : currentRoom.name;

          this.setState({
            currentRoom,
            roomUsers: currentRoom.users,
            rooms: currentUser.rooms,
            roomName,
          });
        })
        .catch(console.error);
    }

    function connectToChatkit(event) {
      event.preventDefault();

      const { userId } = this.state;

      if (userId === null || userId.trim() === '') {
        alert('Invalid userId');
        return;
      }

      axios
        .post('http://localhost:5000/users', { userId })
        .then(() => {
          const tokenProvider = new Chatkit.TokenProvider({
            url: 'http://localhost:5000/authenticate',
          });

          const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:a4df3443-cb08-41b4-ac5f-0b9bac981b05',
            userId,
            tokenProvider,
          });

          return chatManager
            .connect({
              onAddedToRoom: room => {
                const { rooms } = this.state;
                this.setState({
                  rooms: [...rooms, room],
                });
              },
            })
            .then(currentUser => {
              this.setState(
                {
                  currentUser,
                  showLogin: false,
                  rooms: currentUser.rooms,
                },
                // add this line
                () => connectToRoom.call(this)
              );
            });
        })
        .catch(console.error);
    }

    // update this line
    export { handleInput, connectToRoom, connectToChatkit }
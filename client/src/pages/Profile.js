// import React, { Component } from "react";
// import ProfileCard from "../components/ProfileCard";
// import Wrapper from "../components/Wrapper";
// import Title from "../components/Title";
// import User from "../models/User.js"

// class Profile extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     User
//   };

//    // When this component mounts, search for our User array database with findAll()
//   //  componentDidMount() {
//   //   API.getUsers("")
//   //     .then(res => this.setState({ User: res.data }))
//   //     .catch(err => console.log(err));
//   //  }

//   //  editProfile = id => {
//   //    console.log(hello); 
//   //  }

//   // editUser = id => {
//   //   // Filter this.state.friends for friends with an id not equal to the id being removed
//   //   const friends = this.state.friends.filter(friend => friend.id !== id);
//   //   // Set this.state.friends equal to the new friends array
//   //   this.setState({ friends });
//   // };

//   // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Wrapper>
//         <Title>{User.name}</Title>
//         {this.state.User.map(profile => (
//           <div>
//             <ProfileCard
//               firstName={profile.firstName}
//               lastName={profile.lastName}
//               email={profile.email}
//               birthDay={profile.dateOfBirth}
//               image={profile.userImage}
//               creation={profile.creationDate}
//             />
//             <button onClick={() => this.editProfile()} className="edit">
//               edit
//             </button>
//           </div>
//         ))}
//       </Wrapper>
//     );
//   }
// }

// export default Profile;

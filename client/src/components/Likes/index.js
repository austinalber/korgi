import React, {Component} from 'react'; 

class Likes extends Component {
  state = {
    liked = false, 
    count: 1
  };

  updateLikes() {
    this.setState((prevState, props) => {
      return {
        liked: prevState.liked ? false : true, 
        count: prevState.liked ? prevState.count - 1 : prevState.count + 1
      }
    }); 
  }

  render(){
    let classes = className({
      'like-btn': true, 
      'liked': this.state.liked
    });
    return <div className="button-wrap">
      <div className={classes} onClick={() => this.updateLikes()}>Heart</div>
          </div>
  }
}

export default Likes; 

// React Hooks 

// import React, { Component } from "react";

// class LikeBtn extends Component {
//   state = {
//     likedBefore: false,
//     likes: 1
//   };

//   const [likedBefore, false] = useState(...)

//   this.setState({
//     likes: this.state.likedBefore
//       ? this.state.likes - 1
//       : this.state.likes + 1,
//     likedBefore: !this.state.likedBefore
//   })

//   render() {
//     return (
//         <button
//           onClick={() => this.updateLikes
//           }


//           className={("like-button", {
//             liked: this.state.likedBefore
//           })}
//         >
//           Like <span className="liked"></span>
//         </button>
//       </>
//     );
//   }
// }

// export default LikeBtn;

// // likes: count
// // likedBefore: boolean
import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likedBefore: false,
    likes: 1
  };

  render() {
    return (
      <>
        <h2>Heart Button</h2>
        <button
          onClick={() =>
            this.setState({
              likes: this.state.likedBefore
                ? this.state.likes - 1
                : this.state.likes + 1,
              likedBefore: !this.state.likedBefore
            })
          }
          className={("like-button", {
            liked: this.state.likedBefore
          })}
        >
          Like <span className="likes-counter"></span>
        </button>

        <style>{`
          .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
          }
          .liked {
            font-weight: bold;
            color: #1565c0;
          }
        `}</style>
      </>
    );
  }
}

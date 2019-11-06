import React from "react";

function FriendCardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default FriendCardBtn;

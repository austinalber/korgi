/* Before connecting a user to your Chatkit instance, you need to identify the user first. 
We can do this when the app loads by prompting for a username and sending that username to 
the server (to the /users route) which will create a Chatkit user if one doesn't exist. */

// login module 

import React from 'react';
import Proptypes from 'prop-types';

const Dialog = props => {
  const { userId, handleInput, connectToChatkit } = props;

  return (
    <div className="dialog-container">
      <div className="dialog">
        <form className="dialog-form" onSubmit={connectToChatkit}>
          <label className="username-label" htmlFor="username">
            Login with your username
          </label>
          <input
            id="username"
            className="username-input"
            autoFocus
            type="text"
            name="userId"
            value={userId}
            onChange={handleInput}
            placeholder="Enter your username"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  userId: Proptypes.string.isRequired,
  handleInput: Proptypes.func.isRequired,
  connectToChatkit: Proptypes.func.isRequired,
};

export default Dialog;
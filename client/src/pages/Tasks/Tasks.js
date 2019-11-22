import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/authActions";
import adultTasks from "../../utils/taskAdults.json";
import teenTasks from "../../utils/tasksTeen.json";
import kidTasks from "../../utils/tasksKids.json";
import "./task-style.css"

class Tasks extends Component {

  determineAgeGroup = birthday => {
    let birthdayArr = birthday.split("/");
    let currentDateArr = new Date();

    let userYear = birthdayArr[2];
    let currentYear = currentDateArr.getUTCFullYear()

    if((currentYear - userYear) > 18) {
        return this.displayTask(adultTasks, 63);
    } else if((currentYear - userYear) > 13) {
        return this.displayTask(teenTasks, 58);
    } else {
        return this.displayTask(kidTasks, 57);
    }
  };

  displayTask = (obj, length) => {
    let randomTask = Math.floor(Math.random() * (length - 0)) + 1;
    return obj[randomTask].task;
  }

render() {
    const { user } = this.props.auth;
    let taskItem = this.determineAgeGroup(user.birthday);

return (
<div className="parent-div">
      <div className="top-div">
        <p>This Week Task</p>
        {/* <h5>Todays task is to find something related to . . .</h5> */}
      </div>
      <div className="bottom-div">
        <h3>
          {taskItem}
        </h3>
        <Link to="/memento" className="link" style={{ fontFamily: 'Kranky', fontSize: '22px'}}>
          <button className="join" type="button">Create Post!</button>
        </Link>
      </div>
    </div>
    );
  }
}
Tasks.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getUser }
)(Tasks);
import React from 'react'; 
import Thumbnail from "../Thumbnail";
import "./style.css";

const ProfileCard = (props) => {
    return (
        <React.fragment>
            <div className="profile-container">
                <h1 className="text-center">User Profile: {props.firstName}</h1>

                    <div className="profileImg">
                        <Thumbnail src={props.userImage} alt={'Avatar'} className="Avatar" Thumbnail/>
                    </div>
                      <div className="card-body">
                        <div>
                            <h5>Name</h5>
                            <p className="profile-text">{props.firstName}</p>
                            <p className="profile-text">{props.lastName}</p>
                        </div>
                        <div>
                            <h5>Email Address</h5>
                            <p className="profile-text">{props.email}</p>
                        </div>
                        <div>
                            <h5>Date of Birth</h5>
                            <p className="profile-text">Birthday: {props.dateOfBirth}</p>
                        </div>
                        <div>
                            <h5>Zip Code</h5>
                            <p className="profile-text">{props.zipCode}</p>
                        </div>
                        <div>
                            <h5>Begin Date</h5>
                            <p className="profile-text">{props.creationDate}</p>
                        </div>
                    </div>
              </div>

              <span className="edit btn btn-success" onClick={props.edit}>Edit</span>
        </React.fragment>
   )
}

export default ProfileCard; 
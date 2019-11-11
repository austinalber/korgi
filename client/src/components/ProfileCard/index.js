import React from 'react'; 
import Thumbnail from "../Thumbnail";
import "./style.css";

const ProfileCard = (props) => {
    return (
        <React.fragment>
            <div className="profile-container">
                <h1 className="text-center">User Profile: {props.firstName}</h1>
                    <div className="profileImg">
                        <Thumbnail src={props.userImage} alt={'Avatar'} Thumbnail/>
                    </div>
                    <div>
                        <h5>Name</h5>
                        <p>{props.firstName}</p>
                        <p>{props.lastName}</p>
                    </div>
                    <div>
                        <h5>Email Address</h5>
                        <p>{props.email}</p>
                    </div>
                    <div>
                        <h5>Date of Birth</h5>
                        <p>Birthday: {props.dateOfBirth}</p>
                    </div>
                    <div>
                        <h5>Zip Code</h5>
                        <p>{props.zipCode}</p>
                    </div>
                    <div>
                        <h5>Begin Date</h5>
                        <p>{props.creationDate}</p>
                    </div>
              </div>

              <button onClick={() => props.editProfile(props.id)} className="edit">
                  Edit
              </button> 
        </React.fragment>
   )
}

export default ProfileCard; 
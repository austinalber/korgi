import React, { Component } from "react";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "../../utils/API";
import { FriendList, FriendListItem } from "../../components/FriendList";
import "./UserPageStyle.css";


class Profile extends Component {



<div>
<div id='content'>
    <Image src={user.profile_picture} alt={'Avatar'} thumbnail/>
    <div>
        <h5>Name: </h5>
        <p>{user.name}</p>
    </div>
    <div>
        <h5>Surname: </h5>
        <p>{user.surname}</p>
    </div>
    <div>
        <h5>Date of Birth: </h5>
        <p>{user.date_of_birth}</p>
    </div>
    <div>
        <h5>Country: </h5>
        <p>{user.country}</p>
    </div>
    <div>
        <h5>email: </h5>
        <p>{user.email}</p>
    </div>
    <div>
        <h5>Telephone: </h5>
        <p>{user.telephone}</p>
    </div>
    <div>
        <h5>Company: </h5>
        <p>{user.company}</p>
    </div>
    <div>
        <h5>Interests: </h5>
        <ul>{InterestList}</ul>
    </div>
</div>
</div>


export default Profile; 
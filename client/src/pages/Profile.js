import React, {useState, useEffect} from "react";
import axios from "axios";
import './Profile.css';

const Profile = (props) => {
    const {user} = props;
    const [userSettings, setUserSettings] = useState({});

    const UserSettings =  () => {
        axios.post("http://localhost:3001/user", {
            username: user
        }, {withCredentials: true})
        .then(res => {
            setUserSettings(res.data.user)
        });
     };
     useEffect(() => {
        UserSettings();
     }, [])
    return (
        <div className="profile-container">
            <div className="left">
                <div className="title-postPage">Profile</div>
                <div className="profile">
                    <div className="profile-img">
                        <img src={userSettings.avatar} alt="profile" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">{userSettings.username} HEY</div>
                        <div className="profile-email">{userSettings.email} </div>
                    </div>
                </div>
            </div>
            <div className="right">
                {/* your communties */}
                <div className="title-postPage">Your Communities</div>
                <div className="communities">

                    
                    {/* map over communties */}
                    {userSettings.communities ? userSettings.communities.map(community => {
                        <div> {community.name} </div>
                    }) : null}
                        </div>
                    </div>
        </div>
    );
}



export default Profile;
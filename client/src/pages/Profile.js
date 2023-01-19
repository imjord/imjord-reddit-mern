import React, {useState, useEffect} from "react";
import axios from "axios";
import Communties from '../Components/Communites/Communties';
import './Profile.css';

const Profile = (props) => {
    const {user, setUser} = props;
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
             {user.length > 0 ? 
             <div> 
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
                <Communties user={user} />
                </div>
            
                </div>: <p>you must be logged in to see this page</p>}
        </div>
        
    );
}



export default Profile;
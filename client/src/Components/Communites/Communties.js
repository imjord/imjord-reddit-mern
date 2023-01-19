import React, {useState, useEffect} from "react";
import axios from "axios";

const Communities = (props) => {
    const {user} = props;
    const [communties, setCommunties] = useState([{}]);
    const GetCommuntiesWithUsername = (username) => {
        axios.post("http://localhost:3001/user", {
            username: user
        }, {withCredentials: true})
        .then(res => {
           return setCommunties(res.data.user.communties)
            
            
        });
    };
    useEffect(() => {
        GetCommuntiesWithUsername(user);
    }, [])
    return (
        <div>
            {communties?.map((item) => {
                return <div>{item.name}</div>
            })}
        </div>
    );
};


export default Communities;
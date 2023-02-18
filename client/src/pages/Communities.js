import React, {useState, useEffect} from 'react';
import "./Communities.css";

const Communties = (props) => {
    const {communties, GetCommunties, JoinCommunity} = props;

    const handleJoin = (id) => {
        JoinCommunity(id);
    };


    useEffect(() => {
        GetCommunties();
    }, []);

    return (
        <div>
            <h1> Communities </h1>
            {communties.map((community) => (
                <div className='community-list' key={community._id}>
                    <h2>r/{community.name}</h2>
                    <p>Members Count {community.users?.length}</p>
                    <p>{community.description}</p>
                    <button onClick={() => handleJoin(community._id)}>Join</button>
                </div>
            ))}
        </div>
    );
};


export default Communties;
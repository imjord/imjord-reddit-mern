import React, {useState, useEffect} from 'react';
import "./Communities.css";

const Communties = (props) => {
    const {communties, GetCommunties} = props;

    useEffect(() => {
        GetCommunties();
    }, []);

    return (
        <div>
            <h1> Communities </h1>
            {communties.map((community) => (
                <div className='community-list' key={community.id}>
                    <h2>r/{community.name}</h2>
                    <p>{community.description}</p>
                    <button>Join</button>
                </div>
            ))}
        </div>
    );
};


export default Communties;
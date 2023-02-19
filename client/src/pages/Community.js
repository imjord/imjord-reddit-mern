import React, {useState} from "react";




const Community = (props) => {
    const {CreateCommunity, user} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [msg, setMsg] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        CreateCommunity(name, description);
        setMsg(`Community created successfully!`);
        setTimeout(() => {
            setMsg("");
        }, 5000);
        setName("");
        setDescription("");
    }

    return (
        // create a left side with a form to create a community.
         <div  className="postPage-container">
            {user.length > 0 ? 
             <div className="left">
            <div className="title-postPage"> Create a Community </div>
            <hr />
            {msg ? <p className="msg">{msg}</p> : null}
            <div className="post-form">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                <div className="input-margin">
                    <input type="text" className="post-form-control" id="name" placeholder="Community Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-margin">
                    <input type="text" className="post-form-control" id="description" placeholder="Community Description" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    </div>
                    <button type="submit"  className="post-btn">Create</button>
                </form>
                
            </div>
            </div>
            : <p> You must be logged in to create a community </p>}
        </div> 
    );
    };


export default Community;
import React from 'react';

function Create() {
    const home = () => {
        
    }
    return <div id="createBar">
        <img id="createImage" alt="subreddit" src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" />
        <input id="createInput" type="text" placeholder="Create Post" />
        <span className="material-icons createIcon" id="insertImage"> insert_photo </span>
        <span className="material-icons createIcon" id="link"> link </span>
    </div>
}

export default Create;
import React from 'react';

function Feeds() {
    return <div id="feedsDiv">
        <div className="feedsOption">
            <span className="material-icons feedsIcon">home</span>
            <p>Home</p>
        </div>
        <div className="feedsOption">
            <span className="material-icons feedsIcon">show_chart</span>
            <p>Popular</p>
        </div>
        <div className="feedsOption">
            <span className="material-icons feedsIcon">signal_cellular_alt</span>
            <p>All</p>
        </div>
        <div className="feedsOption">
            <span className="material-icons feedsIcon">live_tv</span>
            <p>Unreddit Live</p>
        </div>
  </div>
}

export default Feeds;
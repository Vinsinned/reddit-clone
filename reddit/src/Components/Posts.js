import React from 'react';

function Posts() {
    return <div id="post">
			<div id="vote">
				<span className="material-icons"> arrow_upward </span>
				<p>0</p>
				<span className="material-icons"> arrow_downward </span>
			</div>
			<div id="content">
				<div id="postHeader">
					<img id="subredditImage" alt="subreddit" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_reddit-512.png" />
					<p>r/yourSubredditHere</p>
				</div>
			</div>
    </div>
}

export default Posts;
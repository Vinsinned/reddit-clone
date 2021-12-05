import React from 'react';

function Posts() {
    return <div id="post">
			<div id="vote">
				<span className="material-icons voteButton"> arrow_upward </span>
				<p id="upvoteCount">990k</p>
				<span className="material-icons voteButton"> arrow_downward </span>
			</div>
			<div id="content">
				<div id="postHeader">
					<img id="subredditImage" alt="subreddit" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_reddit-512.png" />
					<p id="subredditName">r/yourSubredditHere</p>
					<p>. Posted by u/vinsonHater123 5 Hours ago</p>
				</div>
				<div id="postContent">
					<h3 id="postTitle">Vinson becomes Vinson the Great!</h3>
					<p id="postPara">As expected, Vinson will become Vinson the Great after achieving similar achievements
						to Alexander the Great. Good job!</p>
				</div>
				<div id="footer">
					<span className="material-icons footerIcon" id="comment"> mode_comment </span>
					<p>5193 comments</p>
					<span className="material-icons footerIcon"> redeem </span>
					<p>Award</p>
					<span className="material-icons footerIcon"> share </span>
					<p>Share</p>
					<span className="material-icons footerIcon"> more_horiz </span>
				</div>
			</div>
    </div>
}

export default Posts;
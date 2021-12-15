import React from 'react';

function Subreddits(props) {
	const { communities } = props;
	let subreddits = [];
	if (communities !== undefined) {
		for (const community of communities) {
			subreddits.push(
				<div className="homeSubreddit" key={community[0]}>
					<div id="subredditInfo">
						<img className="subredditImage" alt="subreddit Icon" src={community[1]} />
						<p className="subredditName">r/{community[0]}</p>
					</div>
					<span className="material-icons" id="homeStar">star_border</span>
				</div>
			)
		}
	}

	return <div>
		{subreddits}
  </div>
}

export default Subreddits;
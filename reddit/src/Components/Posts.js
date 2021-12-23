import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, documentId, addDoc } from "firebase/firestore";
import React, {setState, useState, useEffect, useDebugValue} from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyD8HE94qcTP1M6vMjJF_qXhWY2Sj8JkoXc",
  authDomain: "reddit-clone-fdb51.firebaseapp.com",
  projectId: "reddit-clone-fdb51",
  storageBucket: "reddit-clone-fdb51.appspot.com",
  messagingSenderId: "1015934726789",
  appId: "1:1015934726789:web:800a7cf69442012875efec",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const initialPosts = [
	{
		Comments: "58",
		Content: "https://i.redd.it/nkkywucklj681.jpg",
		Header: "This is the box where I keep my old memories.",
		SubredditImage: "https://styles.redditmedia.com/t5_2sgp1/styles/communityIcon_1mit7n6qhy481.png?width=256&s=b693ef2414ef97485151d9140733c025405e027b",
		SubredditName: "pcmasterrace",
		Time: "11 hours ago",
		Upvotes: "4394",
		username: "cherrybaggle"
	},
	{
		Comments: "17",
		Content: "I'm a comp. sci. student thinking of making a laptop purchase but I can not decide between the two operating systems.  With the new ARM based macbooks, I can not install Windows on it so it just has macOS.  Almost all my professors and classmates use Windows. We have not encountered any program we have to use that is only for Windows yet.  I'd get a Windows laptop right away if i could find sth reliable, with good battery life and a cpu but all PC manufacturers seems to cut corners somewhere but I can trust Apple to make a good product with no bad parts.  What do you recommend?",
		Header: "MacOS or Windows/Linux laptop for programming?",
		SubredditImage: "https://styles.redditmedia.com/t5_2fwo/styles/communityIcon_1bqa1ibfp8q11.png?width=256&s=45361614cdf4a306d5510b414d18c02603c7dd3c",
		SubredditName: "learnprogramming",
		Time: "5 hours ago",
		Upvotes: "15",
		username: "Responsible-Sir9"
	},
	{
		Comments: "43",
		Content: "Thanks to Gregory and his friend Jacod, they successfuly stopped the impossible task of the meteor!",
		Header: "This man single-handedly saved humanity!",
		SubredditImage: "https://preview.redd.it/ldmw8e3zadd51.jpg?auto=webp&s=04bb9823bbfa944f43c6a264b9ffc32c063b0b84",
		SubredditName: "AmazingHumans",
		Time: "30 minutes ago",
		Upvotes: "1168",
		username: "LeBron Snitch"
	},
	{
		Comments: "19.2k",
		Content: "https://preview.redd.it/f58v4g8mwh551.jpg?width=960&crop=smart&auto=webp&s=67768afe83d7ec2c181316a15c078e4036ed442a",
		Header: "I’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
		SubredditImage: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
		SubredditName: "pics",
		Time: "2 years ago",
		Upvotes: "438k",
		username: "ReallyRickAstley"
	},
	{
		Comments: "13.2k",
		Content: "TIMES SQUARE IS GME?!?!",
		Header: "Times Square right now.",
		SubredditImage: "https://styles.redditmedia.com/t5_2th52/styles/communityIcon_4ftjv0810z181.png?width=256&s=093501ffeabbc646534e201184d00bb258cd6ecd",
		SubredditName: "wallstreetbets",
		Time: "11 months ago",
		Upvotes: "446k",
		username: "SomeGuyInDeutschland"
	},
	{
		Comments: "278",
		Content: "I found my interest in reading (and also films) to be waning in the last few years. I read like crazy in high school and college but now whenever I see book that's popular I hesitate to read it thinking \"this premise sounds familiar\" maybe it's a consequence of reading so much that finding new and unique is just harder to find?",
		Header: "Reading less as I get older?",
		SubredditImage: "https://styles.redditmedia.com/t5_2qh4i/styles/communityIcon_d77x0sszups01.png?width=256&s=ecf5e1d0abfc39a719c32cf0ca17ddfd5e46da08",
		SubredditName: "books",
		Time: "9 hours ago",
		Upvotes: "1073",
		username: "SkepticDrinker"
	},
	{
		Comments: "482",
		Content: "https://preview.redd.it/utphugue0pr71.png?width=960&crop=smart&auto=webp&s=8b4e521b344e590a833005a54cf90e0e31182e79",
		Header: "41.9k of you voted and we listened. This subreddit icon is now updated. Thanks for the nightmares.",
		SubredditImage: "https://styles.redditmedia.com/t5_2yo6b/styles/communityIcon_sfbxdgfr14t71.png?width=256&s=4a982d8dedd0fe64047246c7ad62738810cc9713",
		SubredditName: "oddlyterrifying",
		Time: "3 monthss ago",
		Upvotes: "26.9k",
		username: "GallowBoob"
	}
];
const displayPosts = [];
for (const posts of initialPosts) {
	displayPosts.push(
		<div id="post">
			<div id="vote">
				<span id="upvote" className="material-icons voteButton"> arrow_upward </span>
				<p id="upvoteCount">{posts['Upvotes']}</p>
				<span id="downvote" className="material-icons voteButton"> arrow_downward </span>
			</div>
			<div id="content">
				<div id="postHeader">
					<img className="subredditImage" alt="subreddit" src={posts['SubredditImage']} />
					<p id="subredditName" className="headerHover">r/{posts['SubredditName']}</p>
					<div id="headerInfo">. Posted by &nbsp;<p className="headerHover">u/{posts['username']}</p>&nbsp; <p className="headerHover">{posts['Time']}</p></div>
				</div>
				<div id="postContent">
					<h3 id="postTitle">{posts['Header']}</h3>
					<p id="postPara">{posts['Content']}</p>
				</div>
				<div id="footer">
					<div className="footerOption">
						<span className="material-icons footerIcon" id="comment"> mode_comment </span>
						<p>{posts['Comments']} comments</p>
					</div>
					<div className="footerOption">
						<span className="material-icons footerIcon"> redeem </span>
						<p>Award</p>
					</div>
					<div className="footerOption">
						<span className="material-icons footerIcon"> share </span>
						<p>Share</p>
					</div>
					<div id="moreIcon">
						<span className="material-icons footerIcon"> more_horiz </span>
					</div>
				</div>
			</div>
		</div>
	)
}
console.log(displayPosts)
	
function Posts(props) {
	const { posts } = props;
		return (
			<div id="postsContainer">
				{displayPosts}
			</div>
	)
}

export default Posts;
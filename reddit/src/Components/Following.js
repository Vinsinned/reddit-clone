import React from 'react';

function Following(props) {
  const { following } = props;
	let users = [];
	if (following !== undefined) {
		console.log('yes');
		for (const user of following) {
			users.push(
				<div className="userInfo">
					<div className="userProfile" key={user[0]}>
						<img className="userImage" alt="user Icon" src={user[1]} />
						<p className="userName">u/{user[0]}</p>
					</div>
					<span className="material-icons" id="homeStar">star_border</span>
				</div>
			)
		}
	}
	return <div>
		{users}
  </div>
}

export default Following;
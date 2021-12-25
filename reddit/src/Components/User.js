import { doc, documentId } from '@firebase/firestore';
import React from 'react';
import ToggleButton from './ToggleButton';

function User(props) {
	const click = () => {
		const user = document.querySelector('#user');
		const userDropdown = document.querySelector('#userDropdown');
		if (user.classList.contains('clicked') === false) {
			if (document.documentElement.classList.contains('dark')) {
				user.style.cssText = 'border: 1px solid #343536';
			} else {
				user.style.cssText = 'border: 1px solid #edeff1';
			}
			user.classList.add('clicked');
		} else {
			user.style.cssText = 'border: 1px solid transparent';
			user.classList.remove('clicked');
		}
		userDropdown.classList.toggle('hide');
	}
	const hoverIn = () => {
		const user = document.querySelector('#user');
		if (user.classList.contains('clicked') === false) {
			user.style.cssText = 'border: 1px solid #edeff1';
		}
	}
	const hoverOut = () => {
		const user = document.querySelector('#user');
		if (user.classList.contains('clicked') === 	false) {
			user.style.cssText = 'border: 1px solid transparent';
		}
	}
	const coinsHoverIn = () => {
		const coinsAmount = document.querySelector('#coinsAmount');
		coinsAmount.style.cssText = 'color: white;'
	}
	const coinsHoverOut = () => {
		const coinsAmount = document.querySelector('#coinsAmount');
		coinsAmount.style.cssText = 'color: #7c7c7c;'
	}
	const oldRedditIn = () => {
		const oldRedditContainer = document.querySelector('#oldRedditContainer');
		const oldReddit = document.querySelector('#oldReddit');
		oldRedditContainer.style.cssText = 'width: 100%;';
		oldReddit.style.cssText = 'margin-left: 0px;';
	}
	const oldRedditOut = () => {
		const oldRedditContainer = document.querySelector('#oldRedditContainer');
		const oldReddit = document.querySelector('#oldReddit');
		oldRedditContainer.style.cssText = `border-bottom: 1px solid #edeff1;
  		width: 70%;
  		display: block;
  		margin: auto;`;
		oldReddit.style.cssText = `display: flex;
  		align-items: center;
  		margin-left: -15px;`;
	}
	const nightMode = () => {
		const filter = document.querySelector('#homeFilter');
		const dropdown = document.querySelector('#homeDropdown');
		const user = document.querySelector('#user');
		const home = document.querySelector('#home');
		const toggleButton = document.querySelector('#toggleButton');
		toggleButton.checked = true;
		//check if dropdown has hide
		if (document.documentElement.classList.contains('dark') === false) {
			document.documentElement.classList.add('dark');
			if (dropdown.classList.contains('hide') === false) {
				dropdown.style.cssText = `border: 1px solid #343536; border-top: none; border-top-left-radius: 
      			0px; border-top: none; margin-left: 0px;`;
				home.style.cssText = `border: 1px solid #343536; border-top-left-radius: 5px;
      			border-top-right-radius: 5px; border-bottom: none`;
			} else {
				user.style.cssText = 'border: 1px solid #343536';
				home.style.cssText = 'border: 1px solid transparent;';
			}
		} else {
			document.documentElement.classList.remove('dark');
			if (dropdown.classList.contains('hide') === false) {
				dropdown.style.cssText = `border: 1px solid #edeff1; border-top: none; border-top-left-radius: 0px;
      			margin-left: 0px`;
				home.style.cssText = `border: 1px solid #edeff1; border-top-left-radius: 5px;
     			 border-top-right-radius: 5px; border-bottom: none`;
			} else {
				user.style.cssText = 'border: 1px solid #edeff1';
				home.style.cssText = 'border: 1px solid transparent';
			}
		}
	}
	return <div id="user">
		<div id="userContainer" onClick={click} onMouseOver={hoverIn} onMouseOut={hoverOut}>
			<img alt="profile" src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" id="userPic" />
			<span className="material-icons"> expand_more </span>
		</div>
			<div id="userDropdown" className="hide">
				<p className="userSection">Online Status</p>
				<div className="userOption">
				<p className="userPara" id="onPara">On</p>
				<ToggleButton />
			</div>
			<p className="userSection">My Stuff</p>
			<div className="userOption">
					<span className="material-icons userIcon">account_circle</span>
					<p className="userPara">Profile</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">add</span>
					<p className="userPara">Create Avatar</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">settings</span>
					<p className="userPara">User Settings</p>
			</div>
			<p className="userSection">View Options</p>
			<div className='userOption' onClick={nightMode}>
				<span className="material-icons userIcon">dark_mode</span>
				<p className="userPara" id="nightMode">Night Mode</p>
				<ToggleButton />
			</div>
			<p className="userSection">More Stuff</p>
			<div className="userOption">
					<span className="material-icons userIcon">forum</span>
					<p className="userPara">Create a Community</p>
			</div>
			<div className="userOption" onMouseOver={coinsHoverIn} onMouseOut={coinsHoverOut}>
				<span className="material-icons userIcon">monetization_on</span>
				<div id="coinParaContainer">
					<p className="userPara">Coins</p>
					<p id="coinsAmount">0 coins</p>
				</div>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">workspace_premium</span>
					<p className="userPara">Premium</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">flash_on</span>
					<p className="userPara">Powerups</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">adjust</span>
					<p className="userPara">Talk</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">online_prediction</span>
					<p className="userPara">Predictions</p>
			</div>
			<div className="userOption">
					<span className="material-icons userIcon">help_outline</span>
					<p className="userPara">Help Center</p>
			</div>
			<div className="userOption" id="oldRedditContainer" onMouseOver={oldRedditIn} onMouseOut={oldRedditOut}>
				<div id="oldReddit">
					<span className="material-icons userIcon">open_in_new</span>
					<p className="userPara">Visit Old Reddit</p>
				</div>
			</div>
			<div id="logoutOption">
					<span className="material-icons userIcon" id="logout">logout</span>
					<p className="userPara">Log Out</p>
			</div>
  	</div>
  </div>
}

export default User;
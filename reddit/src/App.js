import './index.css';
import './posts.css';
import './create.css';
import './filter.css';
import './following.css';
import './user.css';
import './toggle.css';
import './post.css';
import './postCreator.css'
import Posts from './Components/Posts';
import Create from './Components/Create';
import Filter from './Components/Filter';
import Subreddits from './Components/Subreddits';
import Following from './Components/Following';
import Feeds from './Components/Feeds';
import Other from './Components/Other';
import User from './Components/User';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, documentId, addDoc } from "firebase/firestore";
import React, {setState, useState, useEffect, useDebugValue} from 'react';
//use setstat
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
document.addEventListener('click', (e) => {
  if (e.target !== document.querySelector('#homeFilter')) {
    const homeFilter = document.querySelector('#homeFilter');
    homeFilter.style.cssText = 'border: 1px solid #edeff1; background-color: #F6F7F8;'
  }
});

function App() {
  const [posts, setPosts] = useState();
  let subreddits = [];
  let users = [];
  //Make this so I don't need to use arrya
  const [communities, setCommunities] = useState();
  const [following, setFollowing] = useState();
  const home = async () => {
    const homeContainer = document.querySelector('#homeContainer');
    const homeDropdown = document.querySelector('#homeDropdown');
    //homeContainer.classList.toggle('clicked')
    homeContainer.style.cssText = `border: 1px solid #edeff1; border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;`;
    homeDropdown.style.cssText = `border: 1px solid #edeff1; border-top: none; border-top-left-radius: 0px;`;
    const querySnapshot1 = await getDocs(collection(db, "communities"));
    querySnapshot1.forEach((doc) => {
      subreddits.push([doc.data()['subredditName'], doc.data()['subredditImage']]);
    });
    const querySnapshot2 = await getDocs(collection(db, "following"));
    querySnapshot2.forEach((doc) => {
      users.push([doc.data()['name'], doc.data()['src']]);
    });
    setCommunities(subreddits);
    setFollowing(users);
    dropdownClick();
  }
  const hoverIn = () => {
    const homeContainer = document.querySelector('#homeContainer');
    if (homeContainer.classList.contains('clicked') === false) {
      homeContainer.style.cssText = 'border: 1px solid #d7d7d7; border-radius: 5px;';
    }
  }
  const hoverOut = () => {
    const homeContainer = document.querySelector('#homeContainer');
    if (homeContainer.classList.contains('clicked') === false) {
      homeContainer.style.cssText = 'border: 1px solid transparent; border-radius: 5px;'
    }
  }
  const homeFilterClick = async () => {
    const homeFilter = document.querySelector('#homeFilter');
    homeFilter.style.cssText = 'background-color: white; border: 1px solid #0079d3;';
  };
  const dropdownClick = () => {
    const homeContainer = document.querySelector('#homeContainer');
    const homeDropdown = document.querySelector('#homeDropdown');
    if (homeContainer.classList.contains('clicked') === false) {
      homeContainer.classList.add('clicked');
      homeDropdown.classList.remove('hide');
      homeContainer.style.cssText = 'border: 1px solid #edeff1; border-bottom-left-radius: 0; border-bottom-right-radius: 0'
    } else {
      homeContainer.classList.remove('clicked');
      homeDropdown.classList.add('hide');
      homeContainer.style.cssText = 'border: 1px solid transparent; border-radius: 5px'
    }
  }
  const prePosts = [];
  const [filteredPosts, setFilteredPosts] = useState();
  const initialPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "Posts"));
		querySnapshot.forEach((doc) => {
			prePosts.push(doc.data()['SubredditName'])
		});
		setFilteredPosts(prePosts);
	}
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
      <div id="navbar">
        <img id="logo" alt="Reddit Logo" src="https://i.redd.it/0p60dpb0vr251.jpg" />
        <div id="homeContainer" className="dropdown">
          <div id="home" onClick={home} onMouseOver={hoverIn} onMouseOut={hoverOut}>
            <span className="material-icons" id="homeIcon"> home </span>
            <span className="material-icons"> expand_more </span>
          </div>
          <div id="homeDropdown" className="hide">
            <input type="text" placeholder="Filter" id="homeFilter" onClick={homeFilterClick}></input>
            <p className="homeCommunities">My Communities</p>
            <div id="createCommunity">
              <span className="material-icons" id="homeCreate">add</span>
              <p>Create Community</p>
            </div>
            <Subreddits communities={communities} />
            <p className="homeCommunities">Following</p>
            <Following following={following} />
            <p className="homeCommunities">Feeds</p>
            <Feeds />
            <p className="homeCommunities">Other</p>
            <Other />
          </div>
        </div>
        <div id="search">
          <span className="material-icons" id="searchIcon"> search </span>
          <input type="text" id="search" placeholder="Search Unreddit"/>
        </div>
        <span className="material-icons homeButtons"> mail </span>
        <span className="material-icons homeButtons"> notifications </span>
        <span className="material-icons homeButtons"> add </span>
        <button type="button" id="coinShop"><span className="material-icons" id="cardIcon"> credit_card </span>Free</button>
        <User />
      </div>
      <Create />
      <Filter />
      <Posts posts={filteredPosts} />
    </div>
  );
}

export default App;
  /*
  const register = async (e) => {
    e.preventDefault();
    const image = document.querySelector('#subredditImage');
    const name = document.querySelector('#subredditName');
    const time = document.querySelector('#time');
    const header = document.querySelector('#header');
    const content = document.querySelector('#content');
    const upvotes = document.querySelector('#upvotes');
    const comments = document.querySelector('#comments');
    const username = document.querySelector('#username');
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        SubredditImage: `${image.value}`,
        SubredditName: `${name.value}`,
        Time: `${time.value}`,
        Header: `${header.value}`,
        Content: `${content.value}`,
        Upvotes: `${upvotes.value}`,
        Comments: `${comments.value}`,
        username: `${username.value}`
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div id="postCreator">
      <form>
        <label htmlFor="subredditImage">Subreddit Image</label>
        <input type="text" id="subredditImage" name="subredditImage" />
        <label htmlFor="subredditName">Subreddit Name</label>
        <input type="text" id="subredditName" name="subredditName" />
        <label htmlFor="time">Time from creation</label>
        <input type="text" id="time" name="time" />
        <label htmlFor="header">Header</label>
        <input type="text" id="header" name="header" />
        <label htmlFor="content">Content</label>
        <input type="text" id="content" name="content" />
        <label htmlFor="upvotes">Upvotes</label>
        <input type="text" id="upvotes" name="upvotes" />
        <label htmlFor="comments">comments</label>
        <input type="text" id="comments" name="comments" />
        <label htmlFor="username">username</label>
        <input type="text" id="username" name="username" />
        <button id="submitButton" onClick={register}>SUBMIT YES!</button>
      </form>
    </div>
  )
  */
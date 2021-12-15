import './index.css';
import './posts.css';
import './create.css';
import './filter.css';
import './following.css';
import Posts from './Components/Posts';
import Create from './Components/Create';
import Filter from './Components/Filter';
import Subreddits from './Components/Subreddits';
import Following from './Components/Following';
import Feeds from './Components/Feeds';
import Other from './Components/Other';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
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
})

function App() {
  let subreddits = [];
  let users = [];
  //Make this so I don't need to use arrya
  const [communities, setCommunities] = useState();
  const [following, setFollowing] = useState();
  const home = async () => {
    const homeContainer = document.querySelector('#homeContainer');
    const homeDropdown = document.querySelector('#homeDropdown');
    homeContainer.classList.toggle('clicked')
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
  }
  const checkHomeHover = () => {
    const homeContainer = document.querySelector('#homeContainer');
    if (homeContainer.classList.contains('clicked')) {
      console.log('no effects');
    }
  }
  const homeFilterClick = async () => {
    const homeFilter = document.querySelector('#homeFilter');
    homeFilter.style.cssText = 'background-color: white; border: 1px solid #0079d3;';
  };
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
      <div id="navbar">
        <img id="logo" alt="Reddit Logo" src="https://i.redd.it/0p60dpb0vr251.jpg" />
        <div id="homeContainer" onMouseOver={checkHomeHover} className="dropdown">
          <div id="home" onClick={home}>
            <span className="material-icons" id="homeIcon"> home </span>
            <span className="material-icons"> expand_more </span>
          </div>
          <div id="homeDropdown">
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
        <div id="user">
          <img alt="profile" src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" id="userPic" />
          <span className="material-icons"> expand_more </span>
        </div>
      </div>
      <Create />
      <Filter />
      <Posts />
    </div>
  );
}

export default App;

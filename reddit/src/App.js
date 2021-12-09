import './index.css';
import './posts.css';
import './create.css';
import './filter.css';
import Posts from './Components/Posts';
import Create from './Components/Create';
import Filter from './Components/Filter';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
      <div id="navbar">
        <img id="logo" alt="Reddit Logo" src="https://i.redd.it/0p60dpb0vr251.jpg" />
        <div id="home">
          <span className="material-icons" id="homeIcon"> home </span>
          <span className="material-icons"> expand_more </span>
        </div>
        <div id="search">
          <span className="material-icons" id="searchIcon"> search </span>
          <input type="text" id="search" placeholder="Search Unreddit"/>
        </div>
        <span className="material-icons"> mail </span>
        <span className="material-icons"> notifications </span>
        <span className="material-icons"> add </span>
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

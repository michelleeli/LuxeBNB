import React from 'react';
import ProfileButton from './profileButton';
import './navigation.css'
import "/Users/michelleli/Desktop/LuxeBNB/frontend/src/assets/ABNB.png"
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navigation() {
  const history = useHistory()
  
  const redirectHome = () => {
    history.push("/")
  }

  return (
    <>
      <div className='nav' >
        <div id="logo" onClick={redirectHome}>
          <img id="logoimage" src={require("../../assets/ABNB.png")} />
          <p id="logoname">luxebnb</p>
        </div>
        <SearchBar />
        <div className="profileButton">
          <ProfileButton />
        </div>
      </div>
      <hr id="header"/>
    </>
  );
}

export default Navigation;
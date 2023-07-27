import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout} from "../../store/session";
import LoginFormModal from "../LoginForm";
import './navigation.css'
import SignupModal from "../SignupModal";
import { clearErrors, setLoginErrors } from "../../store/errors";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(state => state.session.user)
  const history = useHistory();

  const openMenu = (e) => {
    e.stopPropagation()
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = (e) => {
    setShowMenu(false);
    dispatch(setLoginErrors([]))
    dispatch(clearErrors())
  };
  
  // const toggleMenu = (e) => {
  //   e.stopPropagation()
  //   if (showMenu === false) {
  //     return openMenu
  //   } else {
  //     return closeMenu
  //   }
  // }

  const redirectRes = (e) => {
    e.stopPropagation()
    history.push(`/reservations`)
  }

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button id="pfp" onClick={openMenu}>
        <i id="burger" className="fa-solid fa-bars" style={{color: "#717171",}}/>
        <i id="pfpIcon" className="fa-regular fa-circle-user fa-2xl" style={{color: "#717171",}}/>
      </button>
      {showMenu  && !currentUser && (
        <ul className="profile-dropdown">
           <>
            <LoginFormModal/>
            <SignupModal/>
           </>
        </ul>
      )} 
      {showMenu && currentUser && (
        <ul className="profile-dropdown">
          <button onClick={redirectRes}>My Trips</button>
          <button onClick={()=> dispatch(logout())}>Log Out</button>
        </ul>
      )}
      
    </>
  );
}

export default ProfileButton;
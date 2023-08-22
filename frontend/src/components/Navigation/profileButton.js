import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout} from "../../store/session";
import LoginFormModal from "../LoginForm";
import './navigation.css'
import SignupModal from "../SignupModal";
import { clearErrors, setLoginErrors } from "../../store/errors";
import { useHistory } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

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

  const redirectRes = (e) => {
    e.stopPropagation()
    history.push(`/reservations`)
  }

  const redirectWish = (e) => {
    e.stopPropagation()
    history.push(`/wishlist`)
  }

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogin = () => {
    setOpenLogin(true)
    console.log(openLogin)
  }

  const handleSignup = () => {
    setOpenSignup(true)
  }

  return (
    <>
      <button id="pfp" onClick={openMenu}>
        <i id="burger" className="fa-solid fa-bars" style={{color: "#717171",}}/>
        <i id="pfpIcon" className="fa-regular fa-circle-user fa-2xl" style={{color: "#717171",}}/>
      </button>
      {showMenu && !currentUser && (
        <ul className="profile-dropdown">
           <>
            <button id="loginButton" onClick={handleLogin}>Log In</button>
            <button id="signupButton" onClick={handleSignup}>Sign Up</button>
           </>
        </ul>
      )} 

      {openLogin && <LoginFormModal closeModal={()=> setOpenLogin(false)}/>}
      {openSignup && <SignupModal closeModal={()=> setOpenSignup(false)}/>}

      {showMenu && currentUser && (
        <ul className="logged-in-dropdown">
          <button id="logged-in-buttons" onClick={redirectRes}>My Trips</button>
          <button id="logged-in-buttons" onClick={redirectWish}>My Wishlist</button>
          <button id="logged-in-buttons" onClick={()=> dispatch(logout())}>Log Out</button>
        </ul>
      )}
      
    </>
  );
}

export default ProfileButton;
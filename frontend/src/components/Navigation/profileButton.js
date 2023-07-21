import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logout } from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    debugger
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const login = (e) => {
    e.preventDefault();
    <Redirect to="/login" />;
  }

  const signup = (e) => {
    e.preventDefault();
    <Redirect to="/signup" />;
  }


  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      { showMenu && 
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          {/* <li>
            <button onClick={login}>Log In</button>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
          <li>
            <button onClick={signup}>Sign Up</button>
          </li> */}
        </ul>
      }
    </>
  );
}

export default ProfileButton;
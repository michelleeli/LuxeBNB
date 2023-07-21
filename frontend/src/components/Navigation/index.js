import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './profileButton';

function Navigation() {
  const currentUser = useSelector(state => state.session.user);

  let links;
  if (currentUser) {
    links = (
      <ProfileButton user={currentUser} />
    );
  } else {
    links = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {/* <ProfileButton user={currentUser} /> */}
        {links}
      </li>
    </ul>
  );
}

export default Navigation;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({isSignedIn, username, handleSignOut }) => (
  <div>
    {isSignedIn ? (
      <div>
        <Link className="main-nav-item" to="/User">
          <i className="fa fa-user-circle"></i>
          {username}
        </Link>
        <Link className="main-nav-item" to="/" onClick={handleSignOut} >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    ) : (
      <div>
        <Link className="main-nav-item" to="/Sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    )}
  </div>
);

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link className="main-nav-item" to="/Sign-in">
      <i className="fa fa-user-circle"></i>
      Sign In
    </Link>
  </div>
);

export default Nav;
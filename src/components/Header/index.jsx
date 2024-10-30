import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
 
const Header = ({ isSignedIn, username, handleSignOut }) => (
  <nav className="main-nav">
    <Logo />
    <Nav isSignedIn={isSignedIn} username={username} handleSignOut={handleSignOut} />
  </nav>
);

export default Header;

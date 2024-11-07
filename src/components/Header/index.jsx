import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({ isSignedIn, userName, handleSignOut }) => (
  <nav className="main-nav">
    <Logo />
    <Nav
      isSignedIn={isSignedIn}
      userName={userName}
      handleSignOut={handleSignOut}
    />
  </nav>
);

export default Header;

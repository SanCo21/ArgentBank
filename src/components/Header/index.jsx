import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({ isSignedIn, firstName, handleSignOut }) => (
  <nav className="main-nav">
    <Logo />
    <Nav
      isSignedIn={isSignedIn}
      firstName={firstName}
      handleSignOut={handleSignOut}
    />
  </nav>
);

export default Header;

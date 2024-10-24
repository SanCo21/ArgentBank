import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link className="main-nav-logo" to="/">
    <img
      className="main-nav-logo-image"
      src="/images/argentBankLogo.png"
      alt="Argent Bank Logo"
    />
    <h1 className="sr-only">Argent Bank</h1>
  </Link>
);
export default Logo;
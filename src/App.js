import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';
// import { useState } from 'react';

// const App = () => (
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/Sign-in" element={<SignIn />} />
//       <Route path="/User" element={<User />} />
//     </Routes>
//     <Footer />
//   </Router>
// );

// export default App;


const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain'
  }
];

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // For demonstration, let's assume we're using the first user
  const [currentUser, setCurrentUser] = useState(users[0]);

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentUser(null); // Reset currentUser to null on sign out
  };

  const handleSignIn = (user) => {
    setIsSignedIn(true);
    setCurrentUser(user);
  };

  return (
    <Router>
      <Header isSignedIn={isSignedIn} username={currentUser ? currentUser.userName : ''} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/User" element={<User currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
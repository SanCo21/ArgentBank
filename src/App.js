import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';

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
  // For demonstration, let's assume we're using the first user
  const currentUser = users[0];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/User" element={<User currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
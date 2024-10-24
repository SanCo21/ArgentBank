import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/User" element={<User />} />
    </Routes>
    <Footer />
  </Router>
);

export default App
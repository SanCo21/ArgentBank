import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { signOut } from './reducers/userReducer';
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <Router>
      <Header
        isSignedIn={!!user}
        userName={user ? user.userName : ""}
        handleSignOut={handleSignOut}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

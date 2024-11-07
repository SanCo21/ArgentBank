import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { signOut } from './reducers/userSlice';
import User from "./pages/User";
import Transactions from "./pages/Transactions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";


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
        <Route path="/transactions/:accountId" element={<Transactions />} />
        <Route path="/error" element={<Error />} />
				<Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

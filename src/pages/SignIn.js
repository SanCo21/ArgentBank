import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reducers/userReducer";
import { login, fetchUserData } from "../API/userService";
import InputWrapper from "../components/InputWrapper";
import CheckboxWrapper from "../components/CheckboxWrapper";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Change username to email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
      const loginResponse = await login({ email, password }); // Change username to email
      const token = loginResponse.body.token;
      const user = await fetchUserData(token);      

      dispatch(setUser(user));
      navigate('/user'); // Redirect to User page after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // const handleSubmit = async (e) => { 
  //   e.preventDefault(); 
  //   try { 
  //     const loginData = { email, password }; // Change username to email 
  //     console.log('Login Data:', loginData); // Log the data being sent 
  //     const user = await login(loginData); 
  //     dispatch(setUser(user)); 
  //     navigate('/user'); // Redirect to User page after successful login
  //   } catch (error) {  
  //     console.error("Login failed:", error); 
  //   } 
  // };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputWrapper
            label="Email"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputWrapper
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckboxWrapper
            label="Remember me"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;

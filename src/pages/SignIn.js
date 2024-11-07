import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, fetchUserProfile, setUser } from "../reducers/userSlice";
// import { login, fetchUserData } from "../API/userService";
import InputWrapper from "../components/InputWrapper";
import CheckboxWrapper from "../components/CheckboxWrapper";
import { FaCheck } from "react-icons/fa";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.user);
  const [email, setEmail] = useState(""); // Change username to email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  // Regex with letters, numbers, dots, underscores, and hyphens in local part
  // and letters, numbers, and hyphens in domain part and a length of 2 to 4 letters in the top-level domain
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };
  // Regex with at least 8 characters and one number
  const validatePassword = (password) => {
    const regex = /^(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  useEffect(() => {
    // Check if the email is non-empty and invalid
    if (email && !validateEmail(email)) {
      setEmailError("Invalid email format"); // Set error message indicating the email format is invalid
      setIsEmailValid(false); // Update state to indicate the email is invalid
      setEmailHasError(true); // Update state to indicate there is an email error

      // Check if the email is non-empty and valid
    } else if (email && validateEmail(email)) {
      setEmailError(""); // Clear the error message because the email is valid
      setIsEmailValid(true); // Update state to indicate the email is valid
      setEmailHasError(false); // Update state to indicate there is no email error

      // If the email is empty
    } else {
      setEmailError(""); // Clear the error message because the email is empty
      setIsEmailValid(false); // Update state to indicate the email is invalid (because it is empty)
      setEmailHasError(false); // Update state to indicate there is no email error (because it is empty)
    }

    // Check if the password is valid
    if (password && !validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one number"
      );
      setIsPasswordValid(false);
      setPasswordHasError(true);
    } else if (password && validatePassword(password)) {
      setPasswordError("");
      setIsPasswordValid(true);
      setPasswordHasError(false);
    } else {
      setPasswordError("");
      setIsPasswordValid(false);
      setPasswordHasError(false);
    }

    // Check if the 2 fiels are valid to enable the button
    if (validateEmail(email) && validatePassword(password)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setEmailHasError(false);
    setPasswordHasError(false);

    try {
      const loginResult = await dispatch(
        loginUser({ email, password })
      ).unwrap(); // Change username to email
      const token = loginResult.body.token;
      const user = await dispatch(fetchUserProfile(token)).unwrap();

      // Dispatch user and token to Redux
      dispatch(setUser({ user, token, rememberMe }));
      navigate("/user"); // Redirect to User page after successful login
    } catch (error) {
      console.error("Login failed:", error);
      console.log("Error details:", error);
      console.log("Error response:", error.response);

      if (error.response && error.response.status === 404) { 
        console.log("Error response status 404:", error.response.status);
        navigate("/error"); // Redirect to Error page if the status code is 404 with a response
      } else if (error.message === "Request failed with status code 404") { 
        console.log("Error message indicates status 404");
          navigate("/error"); // Redirect to Error page if the status code is 404 without a response
      } else { 
        setEmailHasError(true); 
        setPasswordHasError(true); 
        setEmailError("Login failed. Please check your credentials and try again."); 
      } 
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {emailError && <p className="error-message">{emailError}</p>}
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div
            className={`input-wrapper ${!emailError && email ? "valid" : ""}`}
          >
            <InputWrapper
              label="Email"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailValid && !emailHasError && (
              <FaCheck className="valid-check" />
            )}
          </div>
          <div
            className={`input-wrapper ${
              !passwordError && password ? "valid" : ""
            }`}
          >
            <InputWrapper
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordValid && !passwordHasError && (
              <FaCheck className="valid-check" />
            )}
          </div>
          <CheckboxWrapper
            label="Remember me"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <button
            type="submit"
            className="sign-in-button"
            disabled={isButtonDisabled}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
export default SignIn;

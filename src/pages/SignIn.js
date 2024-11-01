import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reducers/userReducer";
import { login, fetchUserData } from "../API/userService";
import InputWrapper from "../components/InputWrapper";
import CheckboxWrapper from "../components/CheckboxWrapper";
import { FaCheck } from "react-icons/fa";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Change username to email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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
    // Check if all fields are filled and valid
    if (email && !validateEmail(email)) {
      setEmailError("Invalid email format");
      setIsEmailValid(false);
    } else if (email && validateEmail(email)) {
      setEmailError("");
      setIsEmailValid(true);
    } else {
      setEmailError("");
      setIsEmailValid(false);
    }

    if (password && !validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one number"
      );
      setIsPasswordValid(false);
    } else if (password && validatePassword(password)) {
      setPasswordError("");
      setIsPasswordValid(true);
    } else {
      setPasswordError("");
      setIsPasswordValid(false);
    }

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

    try {
      const loginResponse = await login({ email, password }); // Change username to email
      const token = loginResponse.body.token;
      const user = await fetchUserData(token);

      // Dispatch user and token to Redux
      dispatch(setUser({ user, token, rememberMe }));
      navigate("/user"); // Redirect to User page after successful login
    } catch (error) {
      console.error("Login failed:", error);
      setEmailError("Login failed. Please check your credentials and try again.");
    }
  };

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
            {isEmailValid && <FaCheck className="valid-check" />}
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
            {isPasswordValid && <FaCheck className="valid-check" />}
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

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "../LoginHeader";
import LoginFooter from "../LoginFooter";
import "../../style/Loogin/style.css";
import "../../App.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState("");
  const [signUpUsernameValid, setSignUpUsernameValid] = useState(true);
  const [signUpPasswordValid, setSignUpPasswordValid] = useState(true);
  const [signUpEmailValid, setSignUpEmailValid] = useState(true);
  const [signUpPhoneNumberValid, setSignUpPhoneNumberValid] = useState(true);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const isAlpha = (input) => /^[a-zA-Z]+$/.test(input);
  const isEmail = (input) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input);
  const isPhoneNumber = (input) => /^[0-9]+$/.test(input);
  const isPasswordValid = (input) => input.length >= 8;

  useEffect(() => {
    if (signUpSuccess) {
      // After successful sign-up, populate the login fields
      setUsername(signUpUsername);
      setPassword(signUpPassword);
      setShowSignUp(false);

      // Automatically trigger login
      handleLogin();
    }
  }, [signUpSuccess, signUpUsername, signUpPassword]);

  const handleLogin = () => {
    // Check if the entered username and password match the sign-up credentials
    if (username === signUpUsername && password === signUpPassword) {
      setUserRole("User");
      onLogin();
    } else if (username === "Admin" && password === "AdminPassword") {
      setUserRole("Admin");
      onLogin();
    } else if (username === "Member" && password === "MemberPassword") {
      setUserRole("Member");
      onLogin();
    } else {
      setValidated(true);
    }
  };

  const handleSignUp = () => {
    if (
      signUpUsername &&
      signUpPassword &&
      signUpEmail &&
      signUpPhoneNumber &&
      isAlpha(signUpUsername) &&
      isEmail(signUpEmail) &&
      isPhoneNumber(signUpPhoneNumber) &&
      isPasswordValid(signUpPassword)
    ) {
      setUserRole("Member");
      setSignUpSuccess(true);
    } else {
      setSignUpUsernameValid(!signUpUsername);
      setSignUpPasswordValid(!signUpPassword);
      setSignUpEmailValid(!signUpEmail);
      setSignUpPhoneNumberValid(!signUpPhoneNumber);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setValidated(true);
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <LoginHeader showSignUp={showSignUp} />
      <div
        className={`login-container bg-dark ${showSignUp ? "expanded" : ""}`}
      >
        <h2>{showSignUp ? "Sign Up" : "Login"}</h2>
        <p>
          {showSignUp
            ? "Don't have an account? Please Sign Up."
            : "If you Admin or Member you Already have an account You can Log in, else Please Sign Up First."}
        </p>

        {signUpSuccess && (
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            <svg
              className="bi flex-shrink-0 me-2"
              width="24"
              height="24"
              role="img"
              aria-label="Success:"
            >
              <circle cx="12" cy="12" r="10" fill="#28a745" />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16.293 7.293a1 1 0 0 0-1.414 0L10 11.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
              />
            </svg>
            <div>You have successfully signed up!</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!showSignUp && (
            <>
              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-user-alt custom-icon"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${
                    validated && !username ? "is-invalid" : ""
                  }`}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {validated && !username && (
                  <span className="invalid-feedback">
                    Please enter a valid username.
                  </span>
                )}
              </div>

              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-user-lock custom-icon"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${
                    validated && !password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {validated && !password && (
                  <span className="invalid-feedback">
                    Please enter a valid password.
                  </span>
                )}
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Login
              </button>
            </>
          )}

          {showSignUp && (
            <>
              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-user-alt"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${
                    !signUpUsernameValid || (showSignUp && !signUpUsername)
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Username"
                  value={signUpUsername}
                  onChange={(e) => {
                    setSignUpUsername(e.target.value);
                    setSignUpUsernameValid(true);
                  }}
                  required
                />
                {!signUpUsernameValid && (
                  <span className="invalid-feedback">
                    Please enter a valid username.
                  </span>
                )}
              </div>

              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className={`form-control ${
                    !signUpEmailValid || (showSignUp && !signUpEmail)
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    setSignUpEmailValid(true);
                  }}
                  required
                />
                {!signUpEmailValid && (
                  <span className="invalid-feedback">
                    Please enter a valid email address.
                  </span>
                )}
              </div>

              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-phone"></i>
                </span>
                <input
                  type="tel"
                  className={`form-control ${
                    !signUpPhoneNumberValid ||
                    (showSignUp && !signUpPhoneNumber)
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Phone Number"
                  value={signUpPhoneNumber}
                  onChange={(e) => {
                    setSignUpPhoneNumber(e.target.value);
                    setSignUpPhoneNumberValid(true);
                  }}
                  required
                />
                {!signUpPhoneNumberValid && (
                  <span className="invalid-feedback">
                    Please enter a valid phone number.
                  </span>
                )}
              </div>

              <div className="input-group">
                <span className="input-group-text i">
                  <i className="fas fa-user-lock"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${
                    !signUpPasswordValid || (showSignUp && !signUpPassword)
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                    setSignUpPasswordValid(true);
                  }}
                  required
                />
                {!signUpPasswordValid && (
                  <span className="invalid-feedback">
                    Please enter a valid password.
                  </span>
                )}
              </div>

              <button
                className="btn btn-primary mt-2"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </>
          )}

          {!showSignUp && userRole !== "Admin" && (
            <button
              className="btn btn-secondary mt-2"
              type="button"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
      <LoginFooter />
    </div>
  );
}

export default Login;

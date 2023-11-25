import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AuthRoute.css";
import facebookLogo from "../assets/img/facebookLogo.webp";
import googleLogo from "../assets/img/googlelogo.webp";
import Btn from "../components/Btn";
import { auth, db } from "../firebase";

const AuthRoute = (): React.ReactElement => {
  const navigate = useNavigate();

  // true -> sign in
  // false -> sign ups
  const [formType, setFormType] = useState<boolean>(true);

  const [errorMsg, setErrorMsg] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setConfirmPassword(event.target.value);
  };

  const signUp = async (): Promise<void> => {
    try {
      if (password !== confirmPassword) {
        // Handle password mismatch
        console.error("Passwords do not match");
        return;
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Set the document ID to be equal to the authentication user's ID
      const userDocRef = doc(db, "users", userCredential.user.uid);

      // Add a new document to the 'users' collection with the specified ID
      await setDoc(userDocRef, {
        username: username,
        email: email,
        cart: [],
        purchased: [],
      });

      console.log("User signed up:", userCredential.user);
      console.log(
        "User document added to 'users' collection with ID:",
        userDocRef.id
      );

      setFormType(!formType);
    } catch (error: any) {
      // Handle errors, e.g., email is already in use
      console.error("Sign up error:", error.message);
    }
  };

  const signIn = async (): Promise<void> => {
    try {
      // Sign in with email and password
      const usersCollection = collection(db, "users");
      const usersQuery = query(
        usersCollection,
        where("username", "==", username)
      );
      const userSnapshot = await getDocs(usersQuery);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        userSnapshot.docs.length > 0
          ? userSnapshot.docs[0].get("email")
          : username,
        password
      );

      // You can access the user data from userCredential.user
      console.log("User signed in:", userCredential.user);

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) navigate("/account");
        unsubscribe();
      });
    } catch (error: any) {
      // Handle errors, e.g., invalid email or password
      console.error("Sign in error:", error.message);

      if (error.code === "auth/invalid-login-credentials" || error.code === "auth/user-not-found") {
        setErrorMsg("Invalid username or password");
      } else {
        setErrorMsg("An error occurred while signing in");
      }
    }
  };

  return (
    <div className="auth-route-container">
      <div className="form-main">
        <form action="#" className="auth-form signin">
          <div className="auth-form__heading">
            {formType ? "Signin" : "Signup"} Here
          </div>

          <div className="auth-form__error-msg">{errorMsg}</div>

          <input
            type="text"
            className="auth-form__input"
            placeholder="Username..."
            value={username}
            onChange={handleUsernameChange}
          />

          <input
            type="email"
            className={`auth-form__input ${formType ? "hidden" : ""}`}
            placeholder="Email..."
            value={email}
            onChange={handleEmailChange}
          />

          <input
            type="password"
            className="auth-form__input"
            placeholder="Password..."
            value={password}
            onChange={handlePasswordChange}
          />

          <input
            type="password"
            className={`auth-form__input ${formType ? "hidden" : ""}`}
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <div
            className={`remember-input-container ${formType ? "" : "hidden"}`}
          >
            <input id="remember-input" type="checkbox" />
            <label htmlFor="remember-input">Remember Me</label>
          </div>

          <Btn
            content={`${formType ? "Sign In" : "Sign Up"}`}
            style={{ width: "100%", textAlign: "center" }}
            onClick={formType ? signIn : signUp}
          />

          <div className="auth-form__or"></div>

          <div className="auth-form__oauth-container">
            <div className="auth-form__oauth-btn">
              <img src={googleLogo} alt="google logo" />
              <div className="auth-form__oauth-btn__text">
                Sign in with Google
              </div>
            </div>
            <div className="auth-form__oauth-btn">
              <img src={facebookLogo} alt="facebook logo" />
              <div className="auth-form__oauth-btn__text">
                Sign in with Facebook
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="form-message">
        <div className="form-message__heading">
          {formType ? "Welcome Back!" : "Join Us Now!"}
        </div>
        <div className="form-message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          modi impedit quod odit libero velit, necessitatibus voluptas veritatis
          beatae blanditiis unde, doloremque tenetur iure officia!
        </div>
        <div className="auth-form__toggle">
          <Btn
            content={`${
              formType ? "No Account? Signup." : "Have an Account? Signin."
            }`}
            onClick={() => {setFormType(!formType); setErrorMsg("")}}
            style={
              {
                "--primary-clr": "white",
                "--text-clr": "white",
                "--text-clr-hover": "hsl(var(--accent-clr))",
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AuthRoute;

import React, { useRef, useState } from "react";
import Header from "./Header";
import "../App.css";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    console.log(email?.current?.value);
    console.log(password?.current?.value);
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );

    setErrorMessage(message);
    if (message) return;
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <div className="glitch ">
        <div className="glitch-img"></div>
      </div>
      <div></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80 flex flex-col justify-center "
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-800 bg-opacity-80 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number "
          className="p-2 my-4 w-full bg-gray-800 bg-opacity-80 rounded-lg"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 my-4  w-full bg-gray-800 bg-opacity-80 rounded-lg"
        />
        <p className="text-red-500 font-bold tex">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

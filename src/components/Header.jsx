import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleGptSearchView } from "../utils/redux/gptSlice";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => {
    return store.user;
  });
  const gptToggle = useSelector((store) => {
    return store.gpt?.showGptSearch;
  });
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");

        // User is signed out
        // ...
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className=" absolute top-0 w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between mx-auto">
      <img
        className="w-24 sm:w-44 "
        // src="../assets/images/46e570ae-8107-49ff-b17b-f43dd3a6093c.png"
        // src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        img="https://firebasestorage.googleapis.com/v0/b/gptn-5a97f.appspot.com/o/logo.jpg?alt=media&token=d4b3cab6-31d5-4307-a09c-238858e04141"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 text-sm">
          <button
            className=" m-2 px-4 text-white  rounded-lg "
            onClick={handleGptSearchClick}
          >
            {gptToggle ? "HOME" : "Search"}
          </button>
          <img
            className="w-8 m-4"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
            alt="userIcon"
          />
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

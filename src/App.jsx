import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostButton from "./components/PostButton";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Posts from "./components/Posts";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const auth = getAuth();

  useEffect(() => {
    const checkUser = async () => {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
          setIsLoggedIn(true);
          setFirstLoad(false);
          console.log("user: ", user);
        } else {
          setUser({});
          setIsLoggedIn(false);
          setFirstLoad(false);
        }
      });
    };
    const fetchPost = () => {
      console.log("fetch post data");
    };
    checkUser();
    fetchPost();
  }, []);

  const display = firstLoad ? (
    ""
  ) : isLoggedIn ? (
    <Posts />
  ) : (
    <StartScreen fnLogIn={setIsLoggedIn} />
  );

  return (
    <div className="bg-slate-100 w-screen h-screen pt-10 overflow-scroll">
      <Navbar />
      {display}
    </div>
  );
}

export default App;

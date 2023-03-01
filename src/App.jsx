import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostButton from "./components/PostButton";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Posts from "./components/Posts";
import UploadScreen from "./components/UploadScreen";

function App() {
  // const [firstLoad, setFirstLoad] = useState(true);
  const [screen, setScreen] = useState("loading");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const auth = getAuth();

  useEffect(() => {
    const checkUser = async () => {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
          setIsLoggedIn(true);
          setScreen("Is Logged In");
          // setFirstLoad(false);
          // console.log("user: ", user);
        } else {
          setUser({});
          setIsLoggedIn(false);
          setScreen("Not Logged In");
          // setFirstLoad(false);
        }
      });
    };

    const fetchPost = async () => {
      const postsArr = [];
      const data = await getDocs(collection(db, "posts"));
      // console.log("data", data);
      data.docs.map((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    };
    checkUser();
    fetchPost();
  }, []);

  // const display = firstLoad ? (
  // "loading"
  // ) : isLoggedIn ? (
  // const display = isLoggedIn ? (
  //   <Posts postsState={[posts, setPosts]} />
  // ) : (
  //   <StartScreen fnLogIn={setIsLoggedIn} />
  // );
  let display = "";

  switch (screen) {
    case "Not Logged In":
      display = <StartScreen fnLogIn={setIsLoggedIn} />;
      break;
    case "Is Logged In":
      display = (
        <Posts postsState={[posts, setPosts]} fnSetScreen={setScreen} />
      );
      break;
    case "Upload Post":
      display = (
        <UploadScreen
          fnSetScreen={setScreen}
          posts={posts}
          fnSetPosts={setPosts}
          user={user.displayName}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="bg-slate-100 w-screen h-screen pt-10 overflow-scroll">
      <Navbar />
      {display}
    </div>
  );
}

export default App;

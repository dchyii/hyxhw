import Navbar from "./components/Navbar";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Posts from "./components/Posts";
import UploadScreen from "./components/UploadScreen";

function App() {
  const [screen, setScreen] = useState("loading");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [docBookmark, setDocBookmark] = useState(null);
  const [lastDocFetched, setLastDocFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const fetchPost = async () => {
    const postsArr = posts;
    const fetchNumber = 10;
    // console.log("posts arr: ", postsArr);
    setIsLoading(true);
    const queryExpression = docBookmark
      ? query(
          collection(db, "posts"),
          orderBy("timestamp", "desc"),
          limit(fetchNumber),
          startAfter(docBookmark)
        )
      : query(
          collection(db, "posts"),
          orderBy("timestamp", "desc"),
          limit(fetchNumber)
        );
    const data = await getDocs(queryExpression);
    // console.log("data", data);
    // console.log("fetch");
    data.docs.map((doc) => {
      postsArr.push({ ...doc.data(), id: doc.id });
    });
    setPosts(postsArr);
    setIsLoading(false);
    console.log("last entry: ", data.docs[data.docs.length - 1]);
    setDocBookmark(data.docs[data.docs.length - 1]);
    if (data.docs.length < fetchNumber) {
      setLastDocFetched(true);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
          // setIsLoggedIn(true);
          setScreen("Is Logged In");
          fetchPost();
          // console.log("user: ", user);
        } else {
          setUser({});
          setScreen("Not Logged In");
        }
      });
    };

    checkUser();
  }, [isLoggedIn]);

  let display = "";

  switch (screen) {
    case "Not Logged In":
      display = <StartScreen fnLogIn={setIsLoggedIn} />;
      break;
    case "Is Logged In":
      display = (
        <Posts
          postsState={[posts, setPosts]}
          fnSetScreen={setScreen}
          user={user.displayName}
          fnFetchPost={fetchPost}
          lastDocFetched={lastDocFetched}
          isLoading={isLoading}
        />
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
    <div className="bg-slate-100 w-screen h-screen pt-10 overflow-scroll bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
      <Navbar user={user.displayName} />
      {display}
    </div>
  );
}

export default App;

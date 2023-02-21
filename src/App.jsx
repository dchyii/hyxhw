import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostButton from "./components/PostButton";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Posts from "./components/Posts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchPost = () => {
      console.log("fetch post data");
    };

    fetchPost();
  }, []);

  const display = isLoggedIn ? <Posts /> : <StartScreen />;

  return (
    <div className="bg-slate-100 w-screen h-screen pt-10 overflow-scroll">
      <Navbar />
      {display}
    </div>
  );
}

export default App;

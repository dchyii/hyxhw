import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostButton from "./components/PostButton";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchPost = () => {
      console.log("fetch post data");
    };

    fetchPost();
  }, []);

  return (
    <div className="App bg-slate-100 w-screen h-screen pt-10 overflow-scroll">
      <Navbar />
      <Post />
      <Post />
      <PostButton />
    </div>
  );
}

export default App;

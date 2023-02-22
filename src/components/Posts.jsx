import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({ postsState }) => {
  console.log("posts props: ", postsState);
  return (
    <div>
      <Post />
      <Post />
      <PostButton />
    </div>
  );
};

export default Posts;

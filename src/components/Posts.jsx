import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({ postsState }) => {
  // console.log("posts props: ", postsState[0]);
  return (
    <div>
      {postsState[0].map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
      {/* <Post /> */}
      {/* <Post /> */}
      <PostButton />
    </div>
  );
};

export default Posts;

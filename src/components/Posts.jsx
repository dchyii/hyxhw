import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({ postsState, fnSetScreen }) => {
  // console.log("posts props: ", postsState[0]);
  // console.log("set screen", fnSetScreen);
  return (
    <div>
      {postsState[0].map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
      {/* <Post /> */}
      {/* <Post /> */}
      <PostButton fnSetScreen={fnSetScreen} />
    </div>
  );
};

export default Posts;

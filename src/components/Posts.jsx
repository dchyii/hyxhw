import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({
  postsState,
  fnSetScreen,
  user,
  fnFetchPost,
  lastDocFetched,
}) => {
  // console.log("posts props: ", postsState[0]);
  // console.log("set screen", fnSetScreen);
  return (
    <div>
      {postsState[0].map((post) => {
        return <Post key={post.id} postData={post} currentUser={user} />;
      })}
      <div
        onClick={fnFetchPost}
        className={` mx-auto mb-5 px-5 w-fit text-center cursor-pointer bg-slate-200 rounded-lg border border-slate-300 ${
          lastDocFetched ? "hidden" : ""
        }`}
      >
        Load more photos ...
      </div>
      <PostButton fnSetScreen={fnSetScreen} />
    </div>
  );
};

export default Posts;

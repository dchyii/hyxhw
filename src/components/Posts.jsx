import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({ postsState, fnSetScreen, user, fnFetchPost }) => {
  const handleScroll = (e) => {
    const totalHeight = e.target.scrollHeight;
    const positionTop = e.target.scrollTop;
    const divHeight = e.target.clientHeight;

    if (positionTop + divHeight + 1 >= totalHeight) {
      fnFetchPost();
    }
  };

  return (
    <div onScroll={handleScroll} className="h-full overflow-auto">
      {postsState[0].map((post) => {
        return <Post key={post.id} postData={post} currentUser={user} />;
      })}

      <PostButton fnSetScreen={fnSetScreen} />
    </div>
  );
};

export default Posts;

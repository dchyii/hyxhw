import { isElectron } from "@firebase/util";
import React from "react";
import Post from "./Post";
import PostButton from "./PostButton";

const Posts = ({
  postsState,
  fnSetScreen,
  user,
  fnFetchPost,
  lastDocFetched,
  isLoading,
}) => {
  const handleScroll = (e) => {
    const totalHeight = e.target.scrollHeight;
    const positionTop = e.target.scrollTop;
    const divHeight = e.target.clientHeight;

    if (positionTop + divHeight + 1 >= totalHeight && !lastDocFetched) {
      fnFetchPost();
    }
  };

  return (
    <div onScroll={handleScroll} className="h-full overflow-auto">
      {postsState[0].map((post) => {
        return <Post key={post.id} postData={post} currentUser={user} />;
      })}
      {isLoading && (
        <div className="my-3 text-center">Loading more photos ...</div>
      )}

      <PostButton fnSetScreen={fnSetScreen} />
    </div>
  );
};

export default Posts;

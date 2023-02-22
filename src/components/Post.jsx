import React from "react";
import Heart from "./Heart";

const Post = ({ postData }) => {
  console.log("post: ", postData);
  return (
    <div className="w-4/5 max-w-lg bg-white mx-auto my-8 border border-slate-300">
      <img src={postData.url} className="aspect-auto" />
      <div className="px-3">
        <div className="flex mt-3 w-full justify-between">
          <div className="flex">
            <h3 className="bg-slate-700 border border-slate-800 rounded-full w-7 h-7 mx-2 text-white text-center">
              {postData.user.charAt(0).toLowerCase()}
            </h3>
            <h3>{postData.user}</h3>
          </div>
          <Heart postId={postData.id} likes={postData.likes} />
        </div>
        <p className=" mb-3 mt-2 px-3">{postData.caption}</p>
      </div>
    </div>
  );
};

export default Post;

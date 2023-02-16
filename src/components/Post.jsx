import React from "react";
import Heart from "./Heart";

const Post = () => {
  return (
    <div className="w-4/5 max-w-lg bg-white mx-auto my-12 border border-slate-300">
      <img
        src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        className="aspect-auto"
      />
      <div className="px-3">
        <div className="flex mt-3">
          <h3 className="bg-slate-700 border border-slate-800 rounded-full w-7 h-7 mx-2 text-white text-center">
            D
          </h3>
          <h3>Desmond</h3>
          <Heart />
        </div>
        <p className=" mb-5">comment comment comment</p>
      </div>
    </div>
  );
};

export default Post;

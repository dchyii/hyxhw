import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Heart = ({ postId, likes, currentUser }) => {
  const [isLiked, setIsLiked] = useState(
    likes.findIndex((likedUser) => likedUser === currentUser) >= 0
      ? true
      : false
  );
  const [likesArr, setLikesArr] = useState(likes);
  const fill = isLiked ? "red" : "none";
  const outline = isLiked ? "red" : "black";

  const handleLike = () => {
    const getIndex = likes.findIndex((likedUser) => likedUser === currentUser);
    const tempArr = likesArr;
    getIndex >= 0
      ? tempArr.splice(getIndex, 1)
      : tempArr.splice(0, 0, currentUser);

    // update UI
    setLikesArr(tempArr);
    setIsLiked(!isLiked);

    // add handleLike backend code here
  };

  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={outline}
        className="w-6 h-6"
        onClick={handleLike}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <span>{likesArr.length}</span>
    </div>
  );
};

export default Heart;

import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const Heart = ({ postId, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesArr, setLikesArr] = useState([]);
  const fill = isLiked ? "red" : "none";
  const outline = isLiked ? "red" : "black";

  // useEffect(() => {
  //   const getLikes = async () => {
  //     const likes = [];
  //     const snapshot = await onSnapshot(
  //       doc(db, "posts", String(postId)),
  //       (doc) => {
  //         const data = doc.data();
  //         likes.push(data.likes);
  //       }
  //     );
  //   };
  //   getLikes();
  //   setLikesCount(likes.length);
  // }, []);

  const snapshot = onSnapshot(doc(db, "posts", String(postId)), (doc) => {
    const data = doc.data();
    setLikesArr(data.likes);
  });

  const handleLike = () => {
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
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

import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase-config";

const useLike = async (postId, likesArr) => {
  const postRef = doc(db, "posts", postId);
  console.log("postRef: ", postRef);
  await updateDoc(postRef, {
    likes: likesArr,
  });
};

export default useLike;

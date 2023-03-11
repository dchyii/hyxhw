import React, { useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Heart from "./Heart";
import useLike from "../Utils/useLike";

const Post = ({ postData, currentUser }) => {
  // console.log("post: ", postData);
  //! get image//
  const [url, setUrl] = useState("");

  useEffect(() => {
    const originalImageRef = ref(getStorage(), `images/${postData.fileName}`);

    const fileNameWithExt = postData.fileName.split(".");
    const fileName = fileNameWithExt[0];
    const ext = fileNameWithExt[1];
    const scaledImageRef = ref(
      getStorage(),
      `images/scaled/${fileName}_512x512.${ext}`
    );
    getDownloadURL(scaledImageRef)
      .then((url) => setUrl(url))
      .catch(() => {
        getDownloadURL(originalImageRef).then((url) => setUrl(url));
      });
  }, []);

  //! handle likes//
  const [likesArr, setLikesArr] = useState(postData.likes);
  const [likedIndex, setLikedIndex] = useState(
    likesArr?.findIndex((likedUser) => likedUser === currentUser)
  );
  const [isLiked, setIsLiked] = useState(likedIndex >= 0 ? true : false);

  const handleLike = () => {
    const tempArr = likesArr;
    likedIndex >= 0
      ? tempArr.splice(likedIndex, 1)
      : tempArr.splice(0, 0, currentUser);

    // update UI
    setLikesArr(tempArr);
    setIsLiked(!isLiked);
    setLikedIndex(likedIndex >= 0 ? -1 : 0);

    // add handleLike backend code here
    useLike(postData.id, tempArr);
  };

  const handleClick = (e) => {
    if (e.detail === 2) {
      handleLike();
    }
  };

  return (
    <div className="w-4/5 max-w-lg bg-white mx-auto my-8 border-2 border-slate-300 rounded-2xl overflow-hidden shadow-2xl">
      <img
        src={url}
        className="aspect-auto w-full"
        loading="lazy"
        onClick={handleClick}
      />
      <div className="px-3">
        <div className="flex mt-3 w-full justify-between">
          <div className="flex">
            <h3 className="bg-slate-700 border border-slate-800 rounded-full w-7 h-7 mx-2 text-white text-center">
              {postData.user.charAt(0).toLowerCase()}
            </h3>
            <h3>{postData.user}</h3>
          </div>
          <Heart handleLike={handleLike} likes={likesArr} isLiked={isLiked} />
        </div>
        <p className=" mb-3 mt-2 px-3">{postData.caption}</p>
      </div>
    </div>
  );
};

export default Post;

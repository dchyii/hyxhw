import React, { useState } from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const UploadScreen = ({ fnSetScreen, posts, fnSetPosts, user }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (e) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    e.preventDefault();
    // console.log("handle upload");
    setIsUploading(true);
    uploadTask.on(
      "state_changed",
      () => {
        console.log("uploading");
      },
      (error) => {
        alert("Upload failed. Please try again.");
        setIsUploading(false);
      },
      () => {
        const newPostData = {
          caption: caption,
          likes: [],
          timestamp: serverTimestamp(),
          user: user,
          fileName: uploadTask.snapshot.ref.name,
        };
        const newPostRef = addDoc(collection(db, "posts"), newPostData);
        posts.unshift({
          ...newPostData,
          id: newPostRef.id,
        });
        setCaption("");
        setFile(null);
        setIsUploading(false);
        fnSetScreen("Is Logged In");
        fnSetPosts(posts);
        alert("Uploaded!");
      }
    );
  };

  return (
    <div className="w-full h-full flex object-center items-center">
      <form
        className="w-4/5 max-w-xl mx-auto p-5 pt-8 border border-slate-300 bg-slate-100 shadow-xl rounded-lg flex flex-col items-center relative"
        onSubmit={handleUpload}
      >
        <div
          className=" absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            fnSetScreen("Is Logged In");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <input
          type="file"
          className="w-full border border-slate-200 rounded-lg px-2 my-2"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Please enter your well wishes for the couple ..."
          className="w-full border border-slate-200 rounded-lg px-2 my-2"
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          type="submit"
          className="font-logo text-2xl border border-slate-300 enabled:bg-green-300 disabled:bg-slate-200 rounded-lg px-5 py-1 my-3 enabled:cursor-pointer"
          disabled={isUploading ? true : !file || !caption ? true : false}
        >
          {isUploading ? "UPLOADING ..." : "POST!"}
        </button>
      </form>
    </div>
  );
};

export default UploadScreen;

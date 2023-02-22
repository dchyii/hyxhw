import React, { useState } from "react";
import { getAuth, signInAnonymously, updateProfile } from "firebase/auth";

const StartScreen = ({ fnLogIn }) => {
  const [username, setUsername] = useState("");

  const auth = getAuth();

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("logging in:", username);
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        const uid = auth.currentUser.uid;
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            fnLogIn(true);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };
  return (
    <div className="w-full h-full bg-slate-100 flex object-center items-center">
      <form
        className="w-4/5 max-w-xl mx-auto p-5 border border-slate-300 shadow-xl rounded-lg flex flex-col items-center"
        onSubmit={handleLogIn}
      >
        <h1 className="font-logo text-4xl">hello!</h1>
        <p>Please enter a name we know you by:</p>
        <input
          type="text"
          placeholder="display name"
          className="w-full border border-slate-200 rounded-lg px-2"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          type="submit"
          className="font-logo text-2xl border border-slate-300 enabled:bg-green-300 disabled:bg-slate-200 rounded-lg px-5 py-1 my-3"
          disabled={username.length < 2 ? true : false}
        >
          Let's Go!
        </button>
      </form>
    </div>
  );
};

export default StartScreen;

import React, { useState } from "react";
import { getAuth, signInAnonymously, updateProfile } from "firebase/auth";

const StartScreen = ({ fnLogIn }) => {
  const [username, setUsername] = useState("");
  const [challenge, setChallenge] = useState(0);

  const auth = getAuth();

  const handleLogIn = (e) => {
    e.preventDefault();
    if (challenge !== 1703) {
      alert("The date is incorrect");
    } else {
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
    }
  };
  return (
    <div className="w-full h-full flex object-center items-center">
      <form
        className="w-4/5 max-w-xl mx-auto p-5 border border-slate-300  bg-slate-100 shadow-xl rounded-lg flex flex-col items-center"
        onSubmit={handleLogIn}
      >
        <h1 className="font-logo text-4xl">hello!</h1>
        <p>Please enter a name we know you by:</p>
        <input
          id="displayName"
          type="text"
          placeholder="Your name"
          className="w-full border border-slate-200 rounded-lg px-2 mb-3"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p>Please enter our wedding date (in the format ddmm):</p>
        <input
          id="challenge"
          type="number"
          placeholder="Date and month of our wedding (in the format ddmm)"
          className="w-full border border-slate-200 rounded-lg px-2 mb-3"
          value={challenge}
          onChange={(e) => {
            setChallenge(e.target.value);
          }}
        />
        <button
          type="submit"
          className="font-logo text-2xl border border-slate-300 enabled:bg-green-300 disabled:bg-slate-200 rounded-lg px-5 py-1 my-3"
          disabled={
            username.length >= 2 && challenge?.toString().length === 4
              ? false
              : true
          }
        >
          Let's Go!
        </button>
      </form>
    </div>
  );
};

export default StartScreen;

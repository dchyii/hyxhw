import React from "react";

const StartScreen = ({ fnLogIn }) => {
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("logging in");
    fnLogIn(true);
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
        />
        <button
          type="submit"
          className="font-logo text-2xl border border-slate-500 bg-slate-200 rounded-lg px-5 py-1 my-3"
        >
          Let's Go!
        </button>
      </form>
    </div>
  );
};

export default StartScreen;

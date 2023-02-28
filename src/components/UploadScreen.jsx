import React from "react";

const UploadScreen = ({ fnSetScreen }) => {
  const handleUpload = (e) => {
    e.preventDefault();
    console.log("handle upload");
  };
  return (
    <div className="w-full h-full bg-slate-100 flex object-center items-center">
      <form
        className="w-4/5 max-w-xl mx-auto p-5 pt-8 border border-slate-300 shadow-xl rounded-lg flex flex-col items-center relative"
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
        />
        <input
          type="text"
          placeholder="Please enter your well wishes for the couple ..."
          className="w-full border border-slate-200 rounded-lg px-2 my-2"
        />
        <button
          type="submit"
          className="font-logo text-2xl border border-slate-300 enabled:bg-green-300 disabled:bg-slate-200 rounded-lg px-5 py-1 my-3"
          //   disabled={username.length < 2 ? true : false}
        >
          POST!
        </button>
      </form>
    </div>
  );
};

export default UploadScreen;

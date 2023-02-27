import React from "react";

const UploadScreen = () => {
  const handleUpload = (e) => {
    e.preventDefault();
    console.log("handle upload");
  };
  return (
    <div className="w-full h-full bg-slate-100 flex object-center items-center">
      <form
        className="w-4/5 max-w-xl mx-auto p-5 border border-slate-300 shadow-xl rounded-lg flex flex-col items-center"
        onSubmit={handleUpload}
      >
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

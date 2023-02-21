import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen h-14 overflow-visible bg-white opacity-90 border-b border-slate-300 shadow-md px-5 py-2 flex justify-between fixed top-0 left-0 right-0">
        <div className="overflow-visible">
          <h1 className="font-logo text-5xl">hy x hw </h1>
        </div>
        {/* <button className="border border-slate-500 px-5 flex items-center content-center shadow-md">
          <span className="text-xl">log in</span>
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen h-14 overflow-visible bg-white opacity-90 border-b border-slate-300 shadow-md px-5 py-2 flex fixed top-0 left-0 right-0">
        <div className="w-4/5 overflow-visible">
          <h1 className="font-logo text-5xl">hy x hw </h1>
        </div>
        {/* <div className="w-1/5 border border-slate-500">
          <p className="h-full align-middle text-center text-xl">log in</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

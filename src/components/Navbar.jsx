import React from "react";

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="w-screen h-14 overflow-visible bg-white opacity-90 border-b border-slate-300 shadow-md px-5 py-2 flex justify-between fixed top-0 left-0 right-0">
        <div className="overflow-visible">
          <h1 className="font-logo text-3xl md:text-5xl pt-2">HY and HW</h1>
        </div>
        <div className=" pl-5 flex items-center content-center">
          {user && (
            <h3 className="bg-slate-700 border border-slate-800 rounded-full w-7 h-7 mx-2 text-white text-center">
              {user?.charAt(0).toLowerCase()}
            </h3>
          )}
          <h3 className="md:text-xl hidden md:block">{user}</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

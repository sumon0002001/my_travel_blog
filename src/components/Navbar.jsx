import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">My Travel Blogs</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p className="cursor-pointer">
          <IoSearch />
        </p>
        <input
          type="text"
          placeholder="Search a post"
          className="outline-none px-3"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <h3>
          {user ? (
            <h3>
              <Link>Write</Link>
            </h3>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </h3>
        <h3>
          {user ? <h3>Profile</h3> : <Link to="/register">Register</Link>}
        </h3>
      </div>
    </div>
  );
};

export default Navbar;

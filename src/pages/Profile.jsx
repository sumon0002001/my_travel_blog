import React from "react";
import Profilepost from "../components/Profilepost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1>Your posts:</h1>
          <Profilepost />
        </div>

        <div className="flex justify-end items-start md:w-[30%] w-full md:items-end ">
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              placeholder="Your username"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <input
              type="password"
              placeholder="Your password"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

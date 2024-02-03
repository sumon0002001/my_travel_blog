import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CiEdit } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            My Travel dairy in Srilanka
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <CiEdit />
            </p>
            <p>
              <FiDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@rawshan</p>
          <div className="flex space-x-2">
            <p>12/01/2024</p>
            <p>13:23</p>
          </div>
        </div>
        <img
          src="https://static.wixstatic.com/media/a77aa0_fbf77ed41e3d4806b41d0ad9c9d0b849~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a77aa0_fbf77ed41e3d4806b41d0ad9c9d0b849~mv2.png"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">post</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">
              <p>Travel</p>
            </div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">
              <p>Srilanka</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h3 className="mt-6 mb-4 font-semibold">Comments: </h3>
          <div className="px-2 py-2 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@rawshan</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">14/0/2012</p>
                <p className="text-gray-400 text-sm">12:34</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <CiEdit />
                  </p>
                  <p>
                    <FiDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice</p>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div className="px-2 py-2 bg-gray-200 rounded-lg">
            <Comment />
          </div>
          {/* write a comment */}
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            />
            <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
              Add Comment
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PostDetails;

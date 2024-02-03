import React from "react";
import { CiEdit } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";

const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
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
  );
};

export default Comment;

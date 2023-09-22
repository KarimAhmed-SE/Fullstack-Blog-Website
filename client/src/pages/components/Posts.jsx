import React from "react";
import computerImage from "./Computer.jpeg";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="flex flex-col mt-10 p-3 shadow-lg shadow-gray-600 border-blue-500 mx-5 space-y-6 md:p-3 md:mx-5 border-y-sky-200 md:space-y-0 md:border-blue-500 md:grid md:grid-cols-3 md:shadow-lg md:hover:shadow-blue-400 md:hover:opacity-60 hover:cursor-pointer transition-all">
      <div className="flex flex-col justify-center items-start">
        <div className="flex space-x-1">
          <img className="h-10 w-10" src={logo} alt="" />
          <p className="text-orange-300">tag</p>
        </div>
        <h1 className="text-4xl font-bold ">News header here!!!</h1>
        <div className="flex flex-col space-y-2 ">
          <Link to={"#"} className="font-bold text-1xl hover:text-blue-500">
            author name
          </Link>
          <time className="text-gray-500">
            8:30 PM GMT+3 - September 17, 2023
          </time>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-gray-500">
          This is where the summary of the paragraph will go, use javascript
          here to show a summary of like the first 100 characters or include a
          section when making a post where the user can enter a specific summary
          if they want!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img className="h-auto w-full md:w-3/4" src={computerImage} alt="" />
      </div>
    </div>
  );
};

export default Posts;

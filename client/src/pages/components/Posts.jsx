import React from "react";
import computerImage from "./Computer.jpeg";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { format } from 'date-fns'

const Posts = ({title, summary, image, author, createdAt, tag}) => {
  return (
    <div className="flex flex-col mt-10 p-3 shadow-lg shadow-gray-600 border-blue-500 mx-5 space-y-6 md:p-3 md:mx-5 border-y-sky-200 md:space-y-0 md:border-blue-500 md:grid md:grid-cols-3 md:shadow-lg md:hover:shadow-blue-400 md:hover:opacity-60 hover:cursor-pointer transition-all">
      <div className="flex flex-col justify-center items-start">
        <div className="flex space-x-1">
          <img className="h-10 w-10" src={logo} alt="" />
          <p className="text-orange-300">{tag}</p>
        </div>
        <h1 className="text-4xl font-bold ">{title}</h1>
        <div className="flex flex-col space-y-2 ">
          <Link to={"#"} className="font-bold text-1xl hover:text-blue-500">
            {author.firstName + " " + author.lastName}
          </Link>
          <time className="text-gray-500">
            {format(new Date(createdAt), 'yyyy-MM-dd HH:mm')}
          </time>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-gray-500">
          {summary}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img 
        className="w-full h-64 md:w-3/4" 
        src={`http://localhost:4000/${image}`} 
        alt="" />
      </div>
    </div>
  );
};

export default Posts;

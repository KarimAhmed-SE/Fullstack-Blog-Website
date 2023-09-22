import React from "react";
import Header from "./components/Header";

const PostDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col container justify-start mt-10 mx-auto items-start">
        <h1 className="text-5xl font-bold">
          This is where the article title will go!
        </h1>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="flex w-1/2 space-x-3">
            <h2 className="text-1xl font-bold hover:text-blue-500 hover:cursor-pointer">
              Author name
            </h2>
            <a className="text-gray-500 hover:text-blue-500 hover:cursor-pointer">
              @authorLink
            </a>
            <p className="text-gray-500"> / 1:47 AM GMT+3•September 20, 2023</p>
          </div>
          <div className="flex space-x-5 w-1/2 justify-end items-end">
            <img /> <p>Comment</p>
          </div>
        </div>
        <div className="mt-10 ">
          <img />
          <p className="text-xl">
            The post paragraph will go here but I'll have to figure out a way to
            not only include images, embeds and links, but also a way to allow
            the user to edit the post if the post was made by them
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

import React, { useContext, useEffect, useState} from "react";
import Header from "./components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../userContext";

const PostDetails = () => {

  const { userInfo, setUserInfo } = useContext(userContext);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/profile`, { withCredentials: true })
      .then((response) => {

        
        console.log(response);
        // setEmail(response.data.email)
        setUserInfo(response.data.email);
        console.log(userInfo);


      });
  }, []);
  return (
    <div>
      <Header />
      <div className="flex flex-col container  mt-10 mx-auto ">
        <div className="flex justify-between">
          <div className="flex justify-start items-start">
            <h1 className="text-5xl font-bold">
              This is where the article title will go!
            </h1>
          </div>

          {userInfo? <div className="flex justify-end items-end">
            <button className="w-1/8 rounded-sm text-white py-3 px-10 font-bold bg-gray-500 md:hover:bg-gray-400">
              Edit Post
            </button>
          </div>: <div></div>}
          
        </div>

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

import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../userContext";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // const text = post.body
  // const displayedText = text.substring(3, text.length-4 )
  useEffect(() => {
    console.log("hello");
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/showDetails/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setPost(response.data);
        
        
        setLoading(false)
        // setEmail(response.data.email)
        // setUserInfo(response.data.email);
        // console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });


     
  }, []);

  return (
    <div>
      
      <Header />

    {loading ? (<div>loading...</div>) : ( <div>
    
    <div className="flex flex-col container  mt-10 mx-auto ">
      <div className="mb-10 flex justify-center items-center">
        <img className="w-full h-auto" src={`http://localhost:4000/${post.image}`} />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-start items-start">
          <h1 className="text-5xl font-bold">{post.title}</h1>
        </div>

        {userInfo.email === post.author.email && (
          <div className="flex justify-end items-end">
            <Link to={`/EditPost/${id}`} className="w-1/8 rounded-sm text-white py-3 px-10 font-bold bg-gray-500 md:hover:bg-gray-400">
              Edit Post
            </Link>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <div className="flex w-1/2 space-x-3">
          <h2 className="text-1xl font-bold hover:text-blue-500 hover:cursor-pointer">
            By {post.author.firstName + " " + post.author.lastName}
          </h2>
          <p className="text-gray-500 hover:text-blue-500 hover:cursor-pointer">
            {post.author.email}
          </p>
          <p className="text-gray-500">
            {" "}
            {format(new Date(post.createdAt), "yyyy-MM-dd HH:mm")}
          </p>
        </div>
        <div className="flex space-x-5 w-1/2 justify-end items-end">
          <img /> <p>Comment</p>
        </div>
      </div>
      <div className="mt-10 shadow-md shadow-gray-400 p-5 ">
        <div dangerouslySetInnerHTML={{__html:post.body}}></div>
      </div>
    </div>
  </div>  )}

  </div>
   
  );
};

export default PostDetails;

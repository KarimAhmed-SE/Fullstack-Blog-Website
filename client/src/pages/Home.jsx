import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:4000/api/displayPost`).then((response)=>{
      console.log(response)
      setPosts(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }, [])
  return (
    <div>
      <Header />
      <div className="flex py-2 justify-center items-center bg-blue-500">
        <Link
          to={"#"}
          className="text-white font-bold text-center hover:underline"
        >
          Watch the 2023 WordCamp US Keynotes from!!
        </Link>
      </div>
     
      {posts.length > 0 &&
        posts.map((post)=>(
          <Link to={`/PostDetails/${post._id}`}>
          <Posts {...post} />
          </Link>
        ))
      }
      
      
      
      
    </div>
  );
};

export default Home;

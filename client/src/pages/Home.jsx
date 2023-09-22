import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";

const Home = () => {
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
      <Link to={'/PostDetails'}><Posts /></Link>
    </div>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";
import google from "../Google Logo.png";
import { userContext } from "../../userContext";

const Header = () => {
  // const [email, setEmail] = useState("");
  const { userInfo, setUserInfo } = useContext(userContext);

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

  const logout = () => {
    // For the log out we need to invalidate the token
    // Better to do this on the backend

    axios.post(`http://localhost:4000/logout`, { withCredentials: true });
    window.location.reload(true);
    setUserInfo(null);
    console.log(userInfo + "hello");
  };

  return (
    <div className="sticky top-0 z-999 bg-gray-800">
      <div className="flex justify-center items-center mx-auto py-3 space-x-10">
        <div className="flex w-1/4 justify-start items-center space-x-6 px-5">
          <div>
            <Link to={"/"}>
              <img className="h-10 w-15" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden space-x-6 w-1/4 md:flex md:justify-start md:items-start  ">
            <Link
              to={"#"}
              className="text-gray-200 text-1xl hover:text-gray-500"
            >
              News
            </Link>
            <Link
              to={"#"}
              className="text-gray-200 text-1xl hover:text-gray-500"
            >
              Community
            </Link>
            <Link
              to={"#"}
              className="text-gray-200 text-1xl hover:text-gray-500"
            >
              About
            </Link>
            <Link
              to={"#"}
              className="text-gray-200 text-1xl hover:text-gray-500"
            >
              Add
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold text-white hover:cursor-pointer">
              Blog Website
            </h1>
          </Link>
        </div>

        {userInfo ? (
          <div className="flex justify-end items-end space-x-6 w-1/4 px-5">
            <Link
              to={"/createArticle"}
              className="font-bold text-3xl text-center text-white"
            >
              {" "}
              +{" "}
            </Link>
            <div className="hidden rounded-full md:flex h-10 w-15">
              <Link to={"/userProfile"}>
                <img className="h-10 w-15" src={google} />
              </Link>
            </div>
            <Link
              to={"/"}
              className="hidden bg-blue-500 rounded-sm px-6 py-3 text-white font-bold hover:bg-orange-300 md:flex transition-all"
              onClick={logout}
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex justify-end items-end space-x-6 w-1/4 px-5">
            <Link
              to={"/Login"}
              className="hidden bg-blue-500 rounded-sm px-6 py-3 text-white font-bold hover:bg-orange-300 md:flex transition-all"
            >
              Login
            </Link>
            <Link
              to={"/Register"}
              className="hidden bg-blue-500 rounded-sm px-6 py-3 text-white font-bold hover:bg-orange-300 md:flex transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

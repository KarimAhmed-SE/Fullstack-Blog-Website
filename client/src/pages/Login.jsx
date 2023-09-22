import React, { useState } from "react";
import Logo from "./components/Logo.png";
import google from "./Google Logo.png";
import facebook from "./fb_icon_325x325.png";
import instagram from "./instagram-new-2022-logo-AD8350AD3C-seeklogo.com.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      email,
      password,
    };

    axios
      .post(`http://localhost:4000/Login`, data)
      .then(() => {
        enqueueSnackbar("logged in successfully!", { variant: "success" });
        navigate("/");
        console.log(data.email);
        console.log(data.password);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
        enqueueSnackbar(
          { message: error.message },
          {
            variant: "error",
          }
        );
      });
  };
  return (
    <section
      id="Login"
      className="flex flex-col justify-center items-center h-screen "
    >
      <div className="mt-10">
        <Link to={"/"}>
          <img className="h-10 w-10" src={Logo} />
        </Link>
      </div>

      <div className="flex space-x-10  md:space-y-0 md:flex-row justify-center items-center mt-10">
        <div className="flex space-x-5  bg-gray-200 hover:bg-gray-300 rounded-md justify-center items-center p-2 hover:cursor-pointer">
          <img className="w-10 h-10" src={google} />
          <p className="hidden md:block">Sign in with Google</p>
        </div>
        <div className="flex space-x-5  bg-gray-200 hover:bg-gray-300 rounded-md justify-center items-center p-2 hover:cursor-pointer">
          <img className="w-10 h-10" src={facebook} />
          <p className="hidden md:block">Sign in with Facebook</p>
        </div>
        <div className="flex space-x-5  bg-gray-200 hover:bg-gray-300 rounded-md justify-center items-center p-2 hover:cursor-pointer">
          <img className="w-10 h-10" src={instagram} />
          <p className="hidden md:block">Sign in with Instagram</p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="justify-center items-center px-3 flex flex-col space-y-5 w-1/2 md:w-1/3 ">
          <h1 className="font-bold text-2xl text-center ">Login</h1>
          <p>
            Need an account?{" "}
            <Link
              to={"/Register"}
              className="text-blue-500 hover:cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
          <div className="flex flex-col w-full">
            <input
              className="rounded-md shadow-md shadow-gray-500 py-3 px-1 w-full my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="flex space-x-10">
            <div className="flex space-x-2">
              <input className="hover:cursor-pointer" type="checkbox" />
              <p>Stay signed in</p>
            </div>

            <a className="hover:text-blue-500 hover:cursor-pointer">
              Forgot username or password?
            </a>
          </div>
          <button
            className="bg-blue-500 rounded-sm text-white py-3 px-10 font-bold md:hover:bg-orange-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;

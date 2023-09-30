import React, { useState } from "react";
import Logo from "./components/Logo.png";
import google from "./Google Logo.png";
import facebook from "./fb_icon_325x325.png";
import instagram from "./instagram-new-2022-logo-AD8350AD3C-seeklogo.com.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import validator from "validator";
import PictureUpload from "./PictureUpload.png";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const validate = (value) => {
    if (value.length < 6) {
      enqueueSnackbar(
        {
          message:
            "Password not long enough! Password should be at least 6 characters long",
        },
        { variant: "error" }
      );
    } else {
      handleRegister();
    }
  };

  const handleRegister = () => {
    // const data = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   sex,
    //   country,
    // };

    const data = new FormData();

    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", password);
    data.append("sex", sex);
    data.append("country", country);
    data.append("file", file);

    axios
      .post(`http://localhost:4000/api/Register`, data)
      .then(() => {
        enqueueSnackbar("Registered successfully!", { variant: "success" });
        navigate("/Login");
        console.log("hello");
      })
      .catch((error) => {
        console.log(error.response.data);
        Object.keys(error.response.data.errors).forEach((key) => {
          if (error.response.data.errors[key] != "") {
            enqueueSnackbar(
              { message: error.response.data.errors[key] },
              { variant: error }
            );
          }
        });
      });
  };

  return (
    <section
      id="Register"
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

      <div className="w-full h-full flex justify-center items-center mt-10">
        <div className="justify-center items-center px-3 flex flex-col space-y-5 w-1/2 md:w-1/3 ">
          <h1 className="font-bold text-2xl text-center ">Register</h1>
          <p>
            Have an account?{" "}
            <Link to={"/Login"} className="text-blue-500 hover:cursor-pointer">
              Sign in
            </Link>
          </p>
          <div className="flex w-full justify-center items-center space-x-5">
            <div className="flex flex-col w-1/2">
              <input
                className="rounded-md shadow-md shadow-gray-500 py-3 px-1 w-full my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none "
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <input
                className="rounded-md shadow-md shadow-gray-500 py-3 px-1 w-full my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none "
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(ev) => {
                  setLastName(ev.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <input
              className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              required
            />
          </div>
          <div className="flex w-full justify-center items-center space-x-5">
            <div className="flex flex-col w-1/2">
              <select
                className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
                name="sex"
                id="sex"
                value={sex}
                onChange={(ev) => setSex(ev.target.value)}
                required
              >
                <option value="null">Select sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2">
              <select
                className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
                name="country"
                id="country"
                value={country}
                onChange={(ev) => setCountry(ev.target.value)}
                required
              >
                <option value="null">Select country</option>
                <option value="Egypt">Egypt</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="UAE">UAE</option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </div>

            {/* Profile picture here */}
            <div className=" relative h-10 w-10 my-3">
              <label htmlFor="input-file">
                <img
                  className="cursor-pointer absolute h-10 w-10 ml-3 -top-1 right-0.5"
                  src={PictureUpload}
                />
              </label>

              <input
                id="input-file"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={(ev) => setFile(ev.target.files[0])}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2">
              <input
                className="hover:cursor-pointer"
                type="checkbox"
                id="policy"
              />
              <p>
                By checking this, you agree to the{" "}
                <a className="text-blue-500 hover:cursor-pointer">Terms</a> and
                acknowledge the{" "}
                <a className="text-blue-500 hover:cursor-pointer">
                  Privacy Policy
                </a>{" "}
                to create an account
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                className="hover:cursor-pointer"
                type="checkbox"
                id="newsletter"
              />
              <p>Subscribe to our newsletter</p>
            </div>
          </div>
          <button
            className="bg-blue-500 rounded-sm text-white py-3 px-10 font-bold md:hover:bg-orange-200"
            onClick={validate}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;

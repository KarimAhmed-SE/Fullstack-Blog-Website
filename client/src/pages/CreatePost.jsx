import React, { useContext, useState, useEffect } from "react";
import Header from "./components/Header";
import { userContext } from "../userContext";
import PictureUpload from "./PictureUpload.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
},
formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [tag, setTag] = useState("");
  const { setUserInfo } = useContext(userContext);
  const navigate = useNavigate();


 

  const handleSubmit = () => {

    
    const data = new FormData();
    data.append('title', title)
    data.append('summary', summary)
    data.append('body', body)
    data.append('file', file)
    data.append('tag', tag)

    console.log(file);



    axios.post(`http://localhost:4000/api/createPost`, data, {headers:{'Content-Type': 'multipart/form-data'}, withCredentials:true}).then((response)=>{
      console.log(response.data)
      navigate("/");
    }).catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col  md:space-y-0 h-screen w-full md:w-3/4">
        <h1 className="text-center font-bold text-3xl mt-10">Create Post</h1>
        <div className="flex flex-col mt-10 w-full justify-center items-center">
          <input
            className="rounded-md shadow-md shadow-gray-500 py-3 px-3 text-xl w-3/4 my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none  md:w-1/2"
            type="text"
            placeholder="Title..."
            required
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <input
            className="rounded-md shadow-md shadow-gray-500 py-3 px-3 text-xl w-3/4 my-3 md:focus:border-b-2 md:border-gray-500 md:hover:bg-gray-100 focus:outline-none  md:w-1/2"
            type="text"
            placeholder="Summary..."
            required
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center h-full md:h-1/2">
          <ReactQuill
            className="rounded-md border-none py-3 h-full text-xl w-3/4 my-3 md:w-1/2 "
            value={body}
            onChange={(newValue) => setBody(newValue)}
            modules={modules}
          />
        </div>
        <div className="flex w-3/4 py-5 mt-10 mx-auto justify-between md:w-1/2">
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
          <div className="flex justify-center items-center h-15">
            <label className="px-3 text-lg w-full ">Select Tag</label>
            <select
              className="rounded-md  py-3 px-1 w-full shadow-md shadow-gray-500 my-3 md:focus:border-b-2 md:border-gray-500  md:hover:bg-gray-100 focus:outline-none"
              name="tag"
              id="tag"
              value={tag}
              onChange={(ev) => setTag(ev.target.value)}
            >
              <option>Choose tag</option>
              <option>Tech</option>
              <option>Politics</option>
              <option>Science</option>
              <option>Art</option>
              <option>Pop Culture</option>
              <option>Music</option>
              <option>NSFW</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end items-end space-x-5">
          <Link
            to={"/"}
            className="w-1/8 rounded-sm text-gray-500 py-3 px-10 font-bold md:hover:bg-red-300"
          >
            Cancel
          </Link>
          <button
            className="bg-blue-500 w-1/8 rounded-sm text-white py-3 px-10 font-bold md:hover:bg-orange-200"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
